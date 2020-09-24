import ext from "./ext";

export const sendMessage = async (msgType, message) => {
    const msg = {
        msgType,
        ...message
    };

    return new Promise((resolve, reject) => {
        try {
            ext.runtime.sendMessage(msg, response => {
                resolve(response);
            });
        } catch (e) {
            console.log("ext.runtime.sendMessage failed => ", e);
            reject({ success: false, error: e });
        }
    });
};
