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

// Función para obtener la exportación principal sin importar su nombre exacto
function extraerObjetoVehiculo(mod) {
    if (!mod) return {};
    if (mod.default) return mod.default;
    const llaves = Object.keys(mod);
    // Retorna la primera exportación que sea un objeto con la propiedad 'marca' o la primera disponible
    const exportValida = llaves.find(key => mod[key] && typeof mod[key] === 'object' && mod[key].marca);
    return exportValida ? mod[exportValida] : (mod[llaves[0]] || {});
}

// Extraemos los objetos de forma segura
export const renaultDuster = extraerObjetoVehiculo(ModuloRenaultDuster);
export const chevroletOnix = extraerObjetoVehiculo(ModuloChevroletOnix);
export const mazdaCx30 = extraerObjetoVehiculo(ModuloMazdaCx30);
export const suzukiSwift = extraerObjetoVehiculo(ModuloSuzukiSwift);
export const kiaPicanto = extraerObjetoVehiculo(ModuloKiaPicanto);
export const toyotaCorolla = extraerObjetoVehiculo(ModuloToyotaCorolla);
export const mazda2 = extraerObjetoVehiculo(ModuloMazda2);
export const chevroletJoy = extraerObjetoVehiculo(ModuloChevroletJoy);
export const renaultStepway = extraerObjetoVehiculo(ModuloRenaultStepway);
export const nissanFrontier = extraerObjetoVehiculo(ModuloNissanFrontier);

export const aktNkd125 = extraerObjetoVehiculo(ModuloAktNkd125);
export const aktNKD125 = aktNkd125; // Compatibilidad con ambas escrituras
export const yamahaNmax155 = extraerObjetoVehiculo(ModuloYamahaNmax155);
export const bajajCt100 = extraerObjetoVehiculo(ModuloBajajCt100);
export const suzukiGn125 = extraerObjetoVehiculo(ModuloSuzukiGn125);
export const hondaCb125f = extraerObjetoVehiculo(ModuloHondaCb125f);
export const yamahaFzs = extraerObjetoVehiculo(ModuloYamahaFzs);
export const bajajPulsarNs200 = extraerObjetoVehiculo(ModuloBajajPulsarNs200);
export const tvsRaider125 = extraerObjetoVehiculo(ModuloTvsRaider125);
export const yamahaXtz150 = extraerObjetoVehiculo(ModuloYamahaXtz150);
export const hondaXr150l = extraerObjetoVehiculo(ModuloHondaXr150l);

// =========================================================
// 2. LISTAS DESTACADAS (TOP 10)
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
// 3. BASE DE DATOS UNIFICADA (Con Getters para evitar ciclos circular)
// =========================================================

export const baseDatosVehiculos = {
    // --- CARROS ---
    get 'c1'() { return renaultDuster; },
    get 'renault-duster'() { return renaultDuster; },

    get 'c2'() { return chevroletOnix; },
    get 'chevrolet-onix'() { return chevroletOnix; },

    get 'c3'() { return mazdaCx30; },
    get 'mazda-cx-30'() { return mazdaCx30; },

    get 'c4'() { return suzukiSwift; },
    get 'suzuki-swift'() { return suzukiSwift; },

    get 'c5'() { return kiaPicanto; },
    get 'kia-picanto'() { return kiaPicanto; },

    get 'c6'() { return toyotaCorolla; },
    get 'toyota-corolla'() { return toyotaCorolla; },

    get 'c7'() { return mazda2; },
    get 'mazda-2'() { return mazda2; },

    get 'c8'() { return chevroletJoy; },
    get 'chevrolet-joy'() { return chevroletJoy; },

    get 'c9'() { return renaultStepway; },
    get 'renault-stepway'() { return renaultStepway; },

    get 'c10'() { return nissanFrontier; },
    get 'nissan-frontier'() { return nissanFrontier; },

    // --- MOTOS ---
    get 'm1'() { return aktNkd125; },
    get 'akt-nkd-125'() { return aktNkd125; },

    get 'm2'() { return yamahaNmax155; },
    get 'yamaha-nmax-155'() { return yamahaNmax155; },

    get 'm3'() { return bajajCt100; },
    get 'bajaj-ct-100'() { return bajajCt100; },

    get 'm4'() { return suzukiGn125; },
    get 'suzuki-gn-125'() { return suzukiGn125; },

    get 'm5'() { return hondaCb125f; },
    get 'honda-cb-125f'() { return hondaCb125f; },

    get 'm6'() { return yamahaFzs; },
    get 'yamaha-fz-s'() { return yamahaFzs; },

    get 'm7'() { return bajajPulsarNs200; },
    get 'bajaj-pulsar-ns-200'() { return bajajPulsarNs200; },

    get 'm8'() { return tvsRaider125; },
    get 'tvs-raider-125'() { return tvsRaider125; },

    get 'm9'() { return yamahaXtz150; },
    get 'yamaha-xtz-150'() { return yamahaXtz150; },

    get 'm10'() { return hondaXr150l; },
    get 'honda-xr-150l'() { return hondaXr150l; }
};