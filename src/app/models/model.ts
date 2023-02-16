export interface City {
    id: number;
    name: string;
    stateCode: string;
    stateName: string;
    nickname: string;
    lat: number;
    lng: number;
    population: number;
    density: number;
    timezone: string;
}

export interface State {
    admissionNumber: number;
    name: string;
    code: string;
    nickname: string;
    admissionDate: Date;
    capitalCity: string;
    capitalUrl: string;
    population: number;
    stateFlagUrl: string;
    stateSealUrl: string;
    mapIamgeUrl: string;
    websiteUrl: string;
    areaMile: number;
    areaKm: number;
}