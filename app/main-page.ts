const createViewModel = require("./get-message").createViewModel;
const app = require("tns-core-modules/application");

function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = createViewModel();

    app.android.registerBroadcastReceiver("customservice",

       (androidContext, intent) => {
            console.log("________________________________________________Data Received");
           let that: any;
           that.data = intent.getIntExtra("message",-1/*default value*/);
            console.log("Data + " + that.data);
    });
}
exports.onNavigatingTo = onNavigatingTo;