export interface ResponseData {
  status: 'success' | 'error';
  message: string;
  data?: any;
}
