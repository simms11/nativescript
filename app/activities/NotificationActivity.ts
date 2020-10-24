import * as application from "tns-core-modules/application";

declare const android: any;


// android.app.Activity.extend("com.tns.activities.NotificationActivity", {
//     onCreate: function(bundle) {
//         _super.prototype.onCreate.call(this, bundle);
//     }
// });

@JavaProxy("com.tns.activities.NotificationActivity")
class Application extends android.app.Application {
    public onCreate(): void {
        super.onCreate();
    }
}
