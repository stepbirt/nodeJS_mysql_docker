class Respones{
    constructor(statusCode, httpStatus, message, data){
         this.timeStamp = new Date().toLocaleTimeString();
         this.statusCode = statusCode;
         this.httpStatus = httpStatus;
         this.message = message;
         this.data = data;
    }
}

export default Respones;