import { notification } from 'antd';

notification.config({ duration: 3 });

export const notifySuccess = (message, desc = undefined) => {
    notification.success({
        message: message,
        description: desc,
    });
};

export const notifyError = (message, desc = undefined) => {
    notification.error({
        message: message,
        description: desc,
    });
};

export const notifyWarning = (message, desc = undefined) => {
    notification.warning({
        message: message,
        description: desc,
    });
};
