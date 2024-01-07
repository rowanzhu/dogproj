import * as dogsvr from 'dogsvr/main_thread';

dogsvr.setLogLevel(dogsvr.LOG_LEVEL_TRACE);

const connLayer: dogsvr.TsrpcCL = new dogsvr.TsrpcCL(3000);
connLayer.setAuthFunc(async (msg: dogsvr.Msg) => {
    return true;
});

const mainThreadInfo: dogsvr.MainThreadInfo =
{
    workerThreadRunFile: "./zonesvr_logic.js",
    workerThreadNum: 2,
    connLayer: connLayer,
}
dogsvr.startServer(mainThreadInfo);
