export class LoggingService{
    logStatusChangeOnConsole(status: string){
        console.log('A server status changed, new status: ' + status);
    }
}