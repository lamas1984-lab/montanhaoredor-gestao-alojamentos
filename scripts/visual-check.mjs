import { chromium } from "playwright-core";

const baseUrl = "https://4174-ia7ss5jxrm52092ojb92b-1bdf4106.us1.manus.computer/";
const executablePath = "/usr/bin/chromium";
const browser = await chromium.launch({ headless: true, executablePath, args: ["--no-sandbox"] });

async function inspect(label, viewport, screenshot) {
  const page = await browser.newPage({ viewport });
  const errors = [];
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });
  page.on("pageerror", (error) => errors.push(error.message));

  await page.goto(baseUrl, { waitUntil: "networkidle" });
  await page.evaluate(async () => {
    for (const image of document.images) {
      image.loading = "eager";
      image.scrollIntoView({ block: "center" });
      if (!image.complete) {
        await Promise.race([
          new Promise((resolve) => {
            image.addEventListener("load", resolve, { once: true });
            image.addEventListener("error", resolve, { once: true });
          }),
          new Promise((resolve) => setTimeout(resolve, 3000)),
        ]);
      }
    }
    window.scrollTo({ top: 0, behavior: "instant" });
  });

  const result = await page.evaluate(() => ({
    title: document.title,
    h1: document.querySelector("h1")?.textContent?.replace(/\s+/g, " ").trim(),
    imageCount: document.images.length,
    brokenImages: [...document.images].filter((image) => !image.complete || image.naturalWidth === 0).map((image) => image.src),
    overflow: document.documentElement.scrollWidth > window.innerWidth + 1,
    casaLink: document.querySelector(`a[href="https://www.montanhaoredor.com"]`)?.getAttribute("target"),
    transfersLink: document.querySelector(`a[href*="4173-ia7ss5jxrm52092ojb92b"]`)?.getAttribute("target"),
    shopLink: document.querySelector(`a[href="https://margaridaart-dawxjx6v.manus.space/"]`)?.getAttribute("target"),
  }));

  if (label === "mobile") {
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.locator(".menu-button").click();
    await page.getByRole("link", { name: /Casa do Lagar/ }).waitFor({ state: "visible" });
    await page.locator(".close-button").click();
  }

  const languageTitles = {};
  const languageCoverage = {};
  const homeStagingVisible = {};
  for (const language of ["EN", "DE", "NL", "PT"]) {
    await page.getByRole("button", { name: `Idioma ${language}` }).click();
    languageTitles[language] = (await page.locator("h1").textContent())?.replace(/\s+/g, " ").trim();
    languageCoverage[language] = (await page.locator("#area").textContent())?.replace(/\s+/g, " ").trim();
    homeStagingVisible[language] = (await page.locator("body").innerText()).toLowerCase().includes("home staging");
    const hasOverflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1);
    if (hasOverflow) throw new Error(`${label}: overflow horizontal no idioma ${language}`);
  }
  await page.screenshot({ path: screenshot, fullPage: true });
  await page.close();

  return { label, ...result, languageTitles, languageCoverage, homeStagingVisible, consoleErrors: errors };
}

const results = [
  await inspect("desktop", { width: 1440, height: 900 }, "/home/ubuntu/montanhaoredor-gestao-alojamentos/preview-desktop-full.png"),
  await inspect("mobile", { width: 390, height: 844 }, "/home/ubuntu/montanhaoredor-gestao-alojamentos/preview-mobile-full.png"),
];

for (const result of results) {
  if (result.brokenImages.length) throw new Error(`${result.label}: imagens com erro: ${result.brokenImages.join(", ")}`);
  if (result.overflow) throw new Error(`${result.label}: overflow horizontal detetado`);
  if (result.casaLink !== "_blank" || result.transfersLink !== "_blank") throw new Error(`${result.label}: ligações entre projetos inválidas`);
  if (result.shopLink !== "_blank") throw new Error(`${result.label}: ligação MargaridaArt inválida`);
  if (!result.languageTitles.EN?.includes("Your home")) throw new Error(`${result.label}: tradução inglesa não aplicada`);
  if (!result.languageTitles.DE?.includes("Ihr Haus")) throw new Error(`${result.label}: tradução alemã não aplicada`);
  if (!result.languageTitles.NL?.includes("Uw woning")) throw new Error(`${result.label}: tradução neerlandesa não aplicada`);
  if (!result.languageTitles.PT?.includes("A sua casa")) throw new Error(`${result.label}: tradução portuguesa não aplicada`);
  if (!result.languageCoverage.EN?.includes("Central Portugal")) throw new Error(`${result.label}: cobertura inglesa não aplicada`);
  if (!result.languageCoverage.DE?.includes("Zentralportugal")) throw new Error(`${result.label}: cobertura alemã não aplicada`);
  if (!result.languageCoverage.NL?.includes("Centraal-Portugal")) throw new Error(`${result.label}: cobertura neerlandesa não aplicada`);
  if (!result.languageCoverage.PT?.includes("Leiria e praias") || !result.languageCoverage.PT?.includes("Caldas da Rainha")) throw new Error(`${result.label}: localidades portuguesas incompletas`);
  if (Object.values(result.homeStagingVisible).some((visible) => !visible)) throw new Error(`${result.label}: home staging não está visível em todos os idiomas`);
  if (result.consoleErrors.length) throw new Error(`${result.label}: erros de consola: ${result.consoleErrors.join(" | ")}`);
}

console.log(JSON.stringify(results, null, 2));
await browser.close();
