// =========================================================
// 1. IMPORTACIÓN DE MÓDULOS DE VEHÍCULOS
// =========================================================

// CARROS
import * as ModuloRenaultDuster from './renaultDuster';
import * as ModuloChevroletOnix from './chevroletOnix';
import * as ModuloMazdaCx30 from './mazdaCx30';
import * as ModuloSuzukiSwift from './suzukiSwift';
import * as ModuloKiaPicanto from './kiaPicanto';
import * as ModuloToyotaCorolla from './toyotaCorolla';
import * as ModuloMazda2 from './mazda2';
import * as ModuloChevroletJoy from './chevroletJoy';
import * as ModuloRenaultStepway from './renaultStepway';
import * as ModuloNissanFrontier from './nissanFrontier';

// MOTOS
import * as ModuloAktNkd125 from './aktNkd125';
import * as ModuloYamahaNmax155 from './yamahaNmax155';
import * as ModuloBajajCt100 from './bajajCt100';
import * as ModuloSuzukiGn125 from './suzukiGn125';
import * as ModuloHondaCb125f from './hondaCb125f';
import * as ModuloYamahaFzs from './yamahaFzs';
import * as ModuloBajajPulsarNs200 from './bajajPulsarNs200';
import * as ModuloTvsRaider125 from './tvsRaider125';
import * as ModuloYamahaXtz150 from './yamahaXtz150';
import * as ModuloHondaXr150l from './hondaXr150l';

// Función auxiliar para extraer el objeto del módulo de forma segura
function resolverModulo(mod) {
    if (!mod) return {};
    return mod.default || mod[Object.keys(mod)[0]] || {};
}

// Extracción individual
export const renaultDuster = resolverModulo(ModuloRenaultDuster);
export const chevroletOnix = resolverModulo(ModuloChevroletOnix);
export const mazdaCx30 = resolverModulo(ModuloMazdaCx30);
export const suzukiSwift = resolverModulo(ModuloSuzukiSwift);
export const kiaPicanto = resolverModulo(ModuloKiaPicanto);
export const toyotaCorolla = resolverModulo(ModuloToyotaCorolla);
export const mazda2 = resolverModulo(ModuloMazda2);
export const chevroletJoy = resolverModulo(ModuloChevroletJoy);
export const renaultStepway = resolverModulo(ModuloRenaultStepway);
export const nissanFrontier = resolverModulo(ModuloNissanFrontier);

export const aktNkd125 = resolverModulo(ModuloAktNkd125);
export const yamahaNmax155 = resolverModulo(ModuloYamahaNmax155);
export const bajajCt100 = resolverModulo(ModuloBajajCt100);
export const suzukiGn125 = resolverModulo(ModuloSuzukiGn125);
export const hondaCb125f = resolverModulo(ModuloHondaCb125f);
export const yamahaFzs = resolverModulo(ModuloYamahaFzs);
export const bajajPulsarNs200 = resolverModulo(ModuloBajajPulsarNs200);
export const tvsRaider125 = resolverModulo(ModuloTvsRaider125);
export const yamahaXtz150 = resolverModulo(ModuloYamahaXtz150);
export const hondaXr150l = resolverModulo(ModuloHondaXr150l);

// =========================================================
// 2. LISTAS PARA CATÁLOGOS Y DESTACADOS (TOP 10)
// =========================================================

export const topCarros = [
    { id: 'c1', marca: 'Renault', modelo: 'Duster', imagen: 'https://cdn-strapi.patiotuerca.com/cdn-cgi/image/trim=0;0;0;720/1440x500_duster_Ikonic_2d8f4d89a8.png' },
    { id: 'c2', marca: 'Chevrolet', modelo: 'Onix', imagen: 'https://www.elcarrocolombiano.com/wp-content/uploads/2025/08/20250812-CHEVROLET-ONIX-2026-VERSIONES-PRECIO-PORTADA.jpg' },
    { id: 'c3', marca: 'Mazda', modelo: 'CX-30', imagen: 'https://es.mazda-press.com/globalassets/generic-cms-images/02-heroes/2025/2025-mazda-cx-30/hero-2025-mazda-cx-30-02-mob.jpg/highdefinitionhalfsize?token=vULvPL3Kp38VAOmPrbF_sLBH7xnV2Mk9mHK3AC6_t_M1' },
    { id: 'c4', marca: 'Suzuki', modelo: 'Swift', imagen: 'https://acnews.blob.core.windows.net/imgnews/large/NAZ_c9912243e7b44043a063235a8eb5d04d.jpg' },
    { id: 'c5', marca: 'Kia', modelo: 'Picanto', imagen: 'https://www.c3carecarcenter.com/wp-content/uploads/2025/05/Descubre-las-caracteristicas-destacadas-del-Kia-Picanto-2016.webp' },
    { id: 'c6', marca: 'Toyota', modelo: 'Corolla', imagen: 'https://yokomotor.com.co/toyota/wp-content/uploads/sites/2/2024/03/yokomotor-toyota-corolla-hev-seg-Super-White.webp' },
    { id: 'c7', marca: 'Mazda', modelo: '2', imagen: 'https://drive.place/images/mazda/mazda_2_ii-res_hatchback_5d_1.jpg' },
    { id: 'c8', marca: 'Chevrolet', modelo: 'Joy', imagen: 'https://leasyauto.com/static/uploads/323dd3b3-4ab3-4560-8cfe-d5a9657e9cea.jpeg' },
    { id: 'c9', marca: 'Renault', modelo: 'Stepway', imagen: 'https://cdn.group.renault.com/ren/co/vehicles/stepway/home/stepway-paisaje2.jpg.ximg.xsmall.jpg/cf3457a613.jpg' },
    { id: 'c10', marca: 'Nissan', modelo: 'Frontier', imagen: 'https://www.nissan-cdn.net/content/dam/Nissan/co/prensa/2023/nissan-frotnier-2024-una-camioneta-pick-up-con-mucho-estilo/nissan-frotnier-2024-una-camioneta-pick-up-con-mucho-estilo-desktop.webp.ximg.l_12_m.smart.webp' },
];

export const topMotos = [
    { id: 'm1', marca: 'AKT', modelo: 'NKD 125', imagen: 'https://acnews.blob.core.windows.net/imgnews/large/NAZ_edc56762d192479abca29ee51b2087dd.jpg' },
    { id: 'm2', marca: 'Yamaha', modelo: 'NMAX 155', imagen: 'https://http2.mlstatic.com/D_805544-MCO110431987063_042026-O.jpg' },
    { id: 'm3', marca: 'Bajaj', modelo: 'CT 100', imagen: 'https://fotos.perfil.com/2026/02/02/bajaj-lanza-en-argentina-la-nueva-boxer-ct100-eficiencia-y-autonomia-record-2179443.jpg' },
    { id: 'm4', marca: 'Suzuki', modelo: 'GN 125', imagen: 'https://motoblog.com/wp-content/uploads/2022/10/WhatsApp-Image-2022-10-27-at-1.47.36-PM-15-1024x682.jpeg' },
    { id: 'm5', marca: 'Honda', modelo: 'CB 125F', imagen: 'https://www.motoplanete.com/honda/galerie/Honda-CBF-125-2026/8.webp' },
    { id: 'm6', marca: 'Yamaha', modelo: 'FZ-S', imagen: 'https://publimotosmagazine.nyc3.digitaloceanspaces.com/%E2%81%A0publimotos_tienda_production/uploads/2025/01/descarga-_1_.webp' },
    { id: 'm7', marca: 'Bajaj', modelo: 'Pulsar NS 200', imagen: 'https://bajajmatriz.com/wp-content/uploads/2024/04/NS200UG-ROJA.jpg' },
    { id: 'm8', marca: 'TVS', modelo: 'Raider 125', imagen: 'https://publimotosmagazine.nyc3.digitaloceanspaces.com/%E2%81%A0publimotos_tienda_production/uploads/2024/03/tvs-raider-125-01.webp' },
    { id: 'm9', marca: 'Yamaha', modelo: 'XTZ 150', imagen: 'https://www.galgo.com/wp-content/uploads/2023/01/YAMAHA-XTZ-150_-La-multiproposito-mas-buscada.webp' },
    { id: 'm10', marca: 'Honda', modelo: 'XR 150L', imagen: 'https://publimotosmagazine.nyc3.digitaloceanspaces.com/%E2%81%A0publimotos_tienda_production/uploads/2024/03/Honda-XR-150L-2025-01.webp' },
];

// =========================================================
// 3. BASE DE DATOS UNIFICADA
// =========================================================

export const baseDatosVehiculos = {
    // --- CARROS ---
    'c1': renaultDuster,
    'renault-duster': renaultDuster,

    'c2': chevroletOnix,
    'chevrolet-onix': chevroletOnix,

    'c3': mazdaCx30,
    'mazda-cx-30': mazdaCx30,

    'c4': suzukiSwift,
    'suzuki-swift': suzukiSwift,

    'c5': kiaPicanto,
    'kia-picanto': kiaPicanto,

    'c6': toyotaCorolla,
    'toyota-corolla': toyotaCorolla,

    'c7': mazda2,
    'mazda-2': mazda2,

    'c8': chevroletJoy,
    'chevrolet-joy': chevroletJoy,

    'c9': renaultStepway,
    'renault-stepway': renaultStepway,

    'c10': nissanFrontier,
    'nissan-frontier': nissanFrontier,

    // --- MOTOS ---
    'm1': aktNkd125,
    'akt-nkd-125': aktNkd125,

    'm2': yamahaNmax155,
    'yamaha-nmax-155': yamahaNmax155,

    'm3': bajajCt100,
    'bajaj-ct-100': bajajCt100,

    'm4': suzukiGn125,
    'suzuki-gn-125': suzukiGn125,

    'm5': hondaCb125f,
    'honda-cb-125f': hondaCb125f,

    'm6': yamahaFzs,
    'yamaha-fz-s': yamahaFzs,

    'm7': bajajPulsarNs200,
    'bajaj-pulsar-ns-200': bajajPulsarNs200,

    'm8': tvsRaider125,
    'tvs-raider-125': tvsRaider125,

    'm9': yamahaXtz150,
    'yamaha-xtz-150': yamahaXtz150,

    'm10': hondaXr150l,
    'honda-xr-150l': hondaXr150l,
};