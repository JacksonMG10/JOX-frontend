// =========================================================
// 1. IMPORTACIÓN DIRECTA DE MÓDULOS
// =========================================================

// CARROS
import renaultDusterObj from './renaultDuster';
import chevroletOnixObj from './chevroletOnix';
import mazdaCx30Obj from './mazdaCx30';
import suzukiSwiftObj from './suzukiSwift';
import kiaPicantoObj from './kiaPicanto';
import toyotaCorollaObj from './toyotaCorolla';
import mazda2Obj from './mazda2';
import chevroletJoyObj from './chevroletJoy';
import renaultStepwayObj from './renaultStepway';
import nissanFrontierObj from './nissanFrontier';

// MOTOS
import aktNkd125Obj from './aktNkd125';
import yamahaNmax155Obj from './yamahaNmax155';
import bajajCt100Obj from './bajajCt100';
import suzukiGn125Obj from './suzukiGn125';
import hondaCb125fObj from './hondaCb125f';
import yamahaFzsObj from './yamahaFzs';
import bajajPulsarNs200Obj from './bajajPulsarNs200';
import tvsRaider125Obj from './tvsRaider125';
import yamahaXtz150Obj from './yamahaXtz150';
import hondaXr150lObj from './hondaXr150l';

// =========================================================
// 2. EXPORTACIÓN INDIVIDUAL SEGURA
// =========================================================

export const renaultDuster = renaultDusterObj;
export const chevroletOnix = chevroletOnixObj;
export const mazdaCx30 = mazdaCx30Obj;
export const suzukiSwift = suzukiSwiftObj;
export const kiaPicanto = kiaPicantoObj;
export const toyotaCorolla = toyotaCorollaObj;
export const mazda2 = mazda2Obj;
export const chevroletJoy = chevroletJoyObj;
export const renaultStepway = renaultStepwayObj;
export const nissanFrontier = nissanFrontierObj;

export const aktNkd125 = aktNkd125Obj;
export const yamahaNmax155 = yamahaNmax155Obj;
export const bajajCt100 = bajajCt100Obj;
export const suzukiGn125 = suzukiGn125Obj;
export const hondaCb125f = hondaCb125fObj;
export const yamahaFzs = yamahaFzsObj;
export const bajajPulsarNs200 = bajajPulsarNs200Obj;
export const tvsRaider125 = tvsRaider125Obj;
export const yamahaXtz150 = yamahaXtz150Obj;
export const hondaXr150l = hondaXr150lObj;

// =========================================================
// 3. LISTAS TOP 10
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
// 4. BASE DE DATOS UNIFICADA
// =========================================================

export const baseDatosVehiculos = {
    // --- CARROS ---
    'c1': renaultDusterObj,
    'renault-duster': renaultDusterObj,

    'c2': chevroletOnixObj,
    'chevrolet-onix': chevroletOnixObj,

    'c3': mazdaCx30Obj,
    'mazda-cx-30': mazdaCx30Obj,

    'c4': suzukiSwiftObj,
    'suzuki-swift': suzukiSwiftObj,

    'c5': kiaPicantoObj,
    'kia-picanto': kiaPicantoObj,

    'c6': toyotaCorollaObj,
    'toyota-corolla': toyotaCorollaObj,

    'c7': mazda2Obj,
    'mazda-2': mazda2Obj,

    'c8': chevroletJoyObj,
    'chevrolet-joy': chevroletJoyObj,

    'c9': renaultStepwayObj,
    'renault-stepway': renaultStepwayObj,

    'c10': nissanFrontierObj,
    'nissan-frontier': nissanFrontierObj,

    // --- MOTOS ---
    'm1': aktNkd125Obj,
    'akt-nkd-125': aktNkd125Obj,

    'm2': yamahaNmax155Obj,
    'yamaha-nmax-155': yamahaNmax155Obj,

    'm3': bajajCt100Obj,
    'bajaj-ct-100': bajajCt100Obj,

    'm4': suzukiGn125Obj,
    'suzuki-gn-125': suzukiGn125Obj,

    'm5': hondaCb125fObj,
    'honda-cb-125f': hondaCb125fObj,

    'm6': yamahaFzsObj,
    'yamaha-fz-s': yamahaFzsObj,

    'm7': bajajPulsarNs200Obj,
    'bajaj-pulsar-ns-200': bajajPulsarNs200Obj,

    'm8': tvsRaider125Obj,
    'tvs-raider-125': tvsRaider125Obj,

    'm9': yamahaXtz150Obj,
    'yamaha-xtz-150': yamahaXtz150Obj,

    'm10': hondaXr150lObj,
    'honda-xr-150l': hondaXr150lObj,
};