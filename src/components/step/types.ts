export enum Steps {
  STEP1 = "/fullname",
  STEP2 = "/email",
  STEP3 = "/address",
  STEP4 = "/floor-number",
  STEP5 = "/amenities",
  STEP6 = "/details",
}

export interface IPaths {
  [Steps.STEP1]: string;
  [Steps.STEP2]: string;
  [Steps.STEP3]: string;
  [Steps.STEP4]: string;
  [Steps.STEP5]: string;
  [Steps.STEP6]: string;
}
