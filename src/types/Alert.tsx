export enum AlertSeverity {
  ERROR = "error",
  INFO = "info",
  SUCCESS = "success",
  WARNING = "warning"
}

export interface Alert {
  severity: AlertSeverity;
  message: string;
}
