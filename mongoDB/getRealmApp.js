import Realm from 'realm';

let app;

export function getRealmApp() {
    if (app === undefined) {
        const appId = "tasktracker-wqoyx";      
        const appConfig = {
            id: appId,
            timeout: 10000,
            app: {
                name: 'default',
                version: '0',
            },
        };
        app = new Realm.App(appConfig);
    }
    console.log('get realm app executed!');
    return app;
}