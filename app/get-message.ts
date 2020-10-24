const Observable = require("tns-core-modules/data/observable").Observable;
const utils = require("tns-core-modules/utils/utils");
const jobScheduler = require("./notifications/job-scheduler");

const getMessage = (counter): any => counter;

function createViewModel() {
    const viewModel = new Observable();
    viewModel.message = "Schedule a local notification every 15 minutes";

    viewModel.onTap = function () {
        jobScheduler.scheduleJob(utils.ad.getApplicationContext());
    }

    return viewModel;
}

exports.createViewModel = createViewModel;