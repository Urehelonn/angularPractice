export class CounterService{
    setToInactiveMsg(user: String, count: number){
        console.log('User '+user+' is set to inactive, now there are '+count+' inactive users.');
    }

    setToActiveMsg(user:string, count: number){
        console.log('User '+user+' is set to active, now there are '+count+' active users.');
    }
}