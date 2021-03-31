export class Response {
  status: number;
  data: any;
  msg?: string;
  errors?: any;
  constructor(status: number, data?: any) {
    this.init();
    this.status = status;
    this.data = data || {};
  }

  init() {
    this.status = 200;
    this.data = {};
    this.msg = "";
    this.errors = [];
    return this;
  }

  setStatus(status: number) {
    this.status = status;
    return this;
  }

  setMsg(msg: string) {
    this.msg = msg;
    return this;
  }

  setData(data: any) {
    this.data = data;
    return this;
  }

  setError(label: string, msg: string) {
    this.errors.push({ label, msg });
    return this;
  }

  getBody() {
    return {
      msg: this.msg,
      data: this.data,
      status: this.status,
      errors: this.errors,
    };
  }
}
