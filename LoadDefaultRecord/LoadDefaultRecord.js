// Defaults
var defaultRecordId = "";

// Overrides
if (typeof LoadDefaultRecord === "object") {
    if (LoadDefaultRecord.hasOwnProperty('defaultRecordId')) {
        defaultRecordId = SampleSiteBeforeSignup.defaultRecordId;
    }
}

if (defaultRecordId === "") {
    console.log("LoadDefaultRecord script requires a defaultRecordId, stopping");
} else {
    if (!window.location.href.includes("/r/rec")) {
        const urlParams = new URLSearchParams(window.location.search);
        const recordId = urlParams.get('recordId');
        if (!recordId) {
            urlParams.set('recordId', defaultRecordId);
            window.history.replaceState({}, '', `${location.pathname}?${urlParams}`);
        }
    }
}

