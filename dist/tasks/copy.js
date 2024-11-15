"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.copy = exports.copyCommand = void 0;
const tslib_1 = require("tslib");
const utils_fs_1 = require("@ionic/utils-fs");
const path_1 = require("path");
const colors_1 = tslib_1.__importDefault(require("../colors"));
const common_1 = require("../common");
const cordova_1 = require("../cordova");
const errors_1 = require("../errors");
const common_2 = require("../ios/common");
const log_1 = require("../log");
const plugin_1 = require("../plugin");
const iosplugin_1 = require("../util/iosplugin");
const promise_1 = require("../util/promise");
const sourcemaps_1 = require("./sourcemaps");
async function copyCommand(config, selectedPlatformName, inline = false) {
    var _a;
    if (selectedPlatformName && !(await (0, common_1.isValidPlatform)(selectedPlatformName))) {
        const platformDir = (0, common_1.resolvePlatform)(config, selectedPlatformName);
        if (platformDir) {
            await (0, common_1.runPlatformHook)(config, selectedPlatformName, platformDir, 'capacitor:copy');
        }
        else {
            log_1.logger.error(`Platform ${colors_1.default.input(selectedPlatformName)} not found.`);
        }
    }
    else {
        const platforms = await (0, common_1.selectPlatforms)(config, selectedPlatformName);
        try {
            await (0, promise_1.allSerial)(platforms.map((platformName) => () => copy(config, platformName, inline)));
        }
        catch (e) {
            if ((0, errors_1.isFatal)(e)) {
                throw e;
            }
            log_1.logger.error((_a = e.stack) !== null && _a !== void 0 ? _a : e);
        }
    }
}
exports.copyCommand = copyCommand;
async function copy(config, platformName, inline = false) {
    await (0, common_1.runTask)(colors_1.default.success(colors_1.default.strong(`copy ${platformName}`)), async () => {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v;
        const result = await (0, common_1.checkWebDir)(config);
        if (result) {
            throw result;
        }
        await (0, common_1.runHooks)(config, platformName, config.app.rootDir, 'capacitor:copy:before');
        const allPlugins = await (0, plugin_1.getPlugins)(config, platformName);
        let usesFederatedCapacitor = false;
        if (allPlugins.filter((plugin) => plugin.id === '@ionic-enterprise/federated-capacitor').length > 0) {
            usesFederatedCapacitor = true;
        }
        let usesLiveUpdates = false;
        if (allPlugins.filter((plugin) => plugin.id === '@capacitor/live-updates').length > 0) {
            usesLiveUpdates = true;
        }
        let usesSSLPinning = false;
        if (allPlugins.filter((plugin) => plugin.id === '@ionic-enterprise/ssl-pinning').length > 0) {
            usesSSLPinning = true;
        }
        if (platformName === config.ios.name) {
            if (usesFederatedCapacitor) {
                await copyFederatedWebDirs(config, await config.ios.webDirAbs);
                if ((_c = (_b = (_a = config.app.extConfig) === null || _a === void 0 ? void 0 : _a.plugins) === null || _b === void 0 ? void 0 : _b.FederatedCapacitor) === null || _c === void 0 ? void 0 : _c.liveUpdatesKey) {
                    await copySecureLiveUpdatesKey(config.app.extConfig.plugins.FederatedCapacitor.liveUpdatesKey, config.app.rootDir, config.ios.nativeTargetDirAbs);
                }
            }
            else {
                await copyWebDir(config, await config.ios.webDirAbs, config.app.webDirAbs);
            }
            if (usesLiveUpdates && ((_f = (_e = (_d = config.app.extConfig) === null || _d === void 0 ? void 0 : _d.plugins) === null || _e === void 0 ? void 0 : _e.LiveUpdates) === null || _f === void 0 ? void 0 : _f.key)) {
                await copySecureLiveUpdatesKey(config.app.extConfig.plugins.LiveUpdates.key, config.app.rootDir, config.ios.nativeTargetDirAbs);
            }
            if (usesSSLPinning && ((_j = (_h = (_g = config.app.extConfig) === null || _g === void 0 ? void 0 : _g.plugins) === null || _h === void 0 ? void 0 : _h.SSLPinning) === null || _j === void 0 ? void 0 : _j.certs)) {
                await copySSLCert((_k = config.app.extConfig.plugins.SSLPinning) === null || _k === void 0 ? void 0 : _k.certs, config.app.rootDir, await config.ios.webDirAbs);
            }
            await copyCapacitorConfig(config, config.ios.nativeTargetDirAbs);
            const cordovaPlugins = await (0, cordova_1.getCordovaPlugins)(config, platformName);
            await (0, cordova_1.handleCordovaPluginsJS)(cordovaPlugins, config, platformName);
            const iosPlugins = await (0, common_2.getIOSPlugins)(allPlugins);
            await (0, iosplugin_1.generateIOSPackageJSON)(config, iosPlugins);
        }
        else if (platformName === config.android.name) {
            if (usesFederatedCapacitor) {
                await copyFederatedWebDirs(config, config.android.webDirAbs);
                if ((_o = (_m = (_l = config.app.extConfig) === null || _l === void 0 ? void 0 : _l.plugins) === null || _m === void 0 ? void 0 : _m.FederatedCapacitor) === null || _o === void 0 ? void 0 : _o.liveUpdatesKey) {
                    await copySecureLiveUpdatesKey(config.app.extConfig.plugins.FederatedCapacitor.liveUpdatesKey, config.app.rootDir, config.android.assetsDirAbs);
                }
            }
            else {
                await copyWebDir(config, config.android.webDirAbs, config.app.webDirAbs);
            }
            if (usesLiveUpdates && ((_r = (_q = (_p = config.app.extConfig) === null || _p === void 0 ? void 0 : _p.plugins) === null || _q === void 0 ? void 0 : _q.LiveUpdates) === null || _r === void 0 ? void 0 : _r.key)) {
                await copySecureLiveUpdatesKey(config.app.extConfig.plugins.LiveUpdates.key, config.app.rootDir, config.android.assetsDirAbs);
            }
            if (usesSSLPinning && ((_u = (_t = (_s = config.app.extConfig) === null || _s === void 0 ? void 0 : _s.plugins) === null || _t === void 0 ? void 0 : _t.SSLPinning) === null || _u === void 0 ? void 0 : _u.certs)) {
                await copySSLCert((_v = config.app.extConfig.plugins.SSLPinning) === null || _v === void 0 ? void 0 : _v.certs, config.app.rootDir, config.android.assetsDirAbs);
            }
            await copyCapacitorConfig(config, config.android.assetsDirAbs);
            const cordovaPlugins = await (0, cordova_1.getCordovaPlugins)(config, platformName);
            await (0, cordova_1.handleCordovaPluginsJS)(cordovaPlugins, config, platformName);
            await (0, cordova_1.writeCordovaAndroidManifest)(cordovaPlugins, config, platformName);
        }
        else if (platformName === config.web.name) {
            if (usesFederatedCapacitor) {
                log_1.logger.info('FederatedCapacitor Plugin installed, skipping web bundling...');
            }
        }
        else {
            throw `Platform ${platformName} is not valid.`;
        }
        if (inline) {
            await (0, sourcemaps_1.inlineSourceMaps)(config, platformName);
        }
    });
    await (0, common_1.runHooks)(config, platformName, config.app.rootDir, 'capacitor:copy:after');
}
exports.copy = copy;
async function copyCapacitorConfig(config, nativeAbsDir) {
    const nativeRelDir = (0, path_1.relative)(config.app.rootDir, nativeAbsDir);
    const nativeConfigFile = 'capacitor.config.json';
    const nativeConfigFilePath = (0, path_1.join)(nativeAbsDir, nativeConfigFile);
    await (0, common_1.runTask)(`Creating ${colors_1.default.strong(nativeConfigFile)} in ${nativeRelDir}`, async () => {
        var _a;
        (_a = config.app.extConfig.android) === null || _a === void 0 ? true : delete _a.buildOptions;
        await (0, utils_fs_1.writeJSON)(nativeConfigFilePath, config.app.extConfig, {
            spaces: '\t',
        });
    });
}
async function copyWebDir(config, nativeAbsDir, webAbsDir) {
    var _a;
    const webRelDir = (0, path_1.basename)(webAbsDir);
    const nativeRelDir = (0, path_1.relative)(config.app.rootDir, nativeAbsDir);
    if (((_a = config.app.extConfig.server) === null || _a === void 0 ? void 0 : _a.url) && !(await (0, utils_fs_1.pathExists)(webAbsDir))) {
        log_1.logger.warn(`Cannot copy web assets from ${colors_1.default.strong(webRelDir)} to ${nativeRelDir}\n` +
            `Web asset directory specified by ${colors_1.default.input('webDir')} does not exist. This is not an error because ${colors_1.default.input('server.url')} is set in config.`);
        return;
    }
    await (0, common_1.runTask)(`Copying web assets from ${colors_1.default.strong(webRelDir)} to ${nativeRelDir}`, async () => {
        await (0, utils_fs_1.remove)(nativeAbsDir);
        return (0, utils_fs_1.copy)(webAbsDir, nativeAbsDir);
    });
}
async function copyFederatedWebDirs(config, nativeAbsDir) {
    var _a, _b;
    log_1.logger.info('FederatedCapacitor Plugin Loaded - Copying Web Assets');
    if (!((_b = (_a = config.app.extConfig) === null || _a === void 0 ? void 0 : _a.plugins) === null || _b === void 0 ? void 0 : _b.FederatedCapacitor)) {
        throw `FederatedCapacitor plugin is present but no valid config is defined.`;
    }
    const federatedConfig = config.app.extConfig.plugins.FederatedCapacitor;
    if (federatedConfig) {
        if (federatedConfig.shell.name === undefined) {
            throw `FederatedCapacitor plugin is present but no valid Shell application is defined in the config.`;
        }
        if (!federatedConfig.apps.every(isFederatedApp)) {
            throw `FederatedCapacitor plugin is present but there is a problem with the apps defined in the config.`;
        }
        const copyApps = () => {
            return federatedConfig.apps.map((app) => {
                const appDir = (0, path_1.resolve)(config.app.rootDir, app.webDir);
                return copyWebDir(config, (0, path_1.resolve)(nativeAbsDir, app.name), appDir);
            });
        };
        const copyShell = () => {
            return copyWebDir(config, (0, path_1.resolve)(nativeAbsDir, federatedConfig.shell.name), config.app.webDirAbs);
        };
        await Promise.all([...copyApps(), copyShell()]);
    }
}
function isFederatedApp(config) {
    return config.webDir !== undefined && config.name !== undefined;
}
async function copySecureLiveUpdatesKey(secureLiveUpdatesKeyFile, rootDir, nativeAbsDir) {
    const keyAbsFromPath = (0, path_1.join)(rootDir, secureLiveUpdatesKeyFile);
    const keyAbsToPath = (0, path_1.join)(nativeAbsDir, (0, path_1.basename)(keyAbsFromPath));
    const keyRelToDir = (0, path_1.relative)(rootDir, nativeAbsDir);
    if (!(await (0, utils_fs_1.pathExists)(keyAbsFromPath))) {
        log_1.logger.warn(`Cannot copy Secure Live Updates signature file from ${colors_1.default.strong(keyAbsFromPath)} to ${keyRelToDir}\n` +
            `Signature file does not exist at specified key path.`);
        return;
    }
    await (0, common_1.runTask)(`Copying Secure Live Updates key from ${colors_1.default.strong(secureLiveUpdatesKeyFile)} to ${keyRelToDir}`, async () => {
        return (0, utils_fs_1.copy)(keyAbsFromPath, keyAbsToPath);
    });
}
async function copySSLCert(sslCertPaths, rootDir, targetDir) {
    const validCertPaths = [];
    for (const sslCertPath of sslCertPaths) {
        const certAbsFromPath = (0, path_1.join)(rootDir, sslCertPath);
        if (!(await (0, utils_fs_1.pathExists)(certAbsFromPath))) {
            log_1.logger.warn(`Cannot copy SSL Certificate file from ${colors_1.default.strong(certAbsFromPath)}\n` +
                `SSL Certificate does not exist at specified path.`);
            return;
        }
        validCertPaths.push(certAbsFromPath);
    }
    const certsDirAbsToPath = (0, path_1.join)(targetDir, 'certs');
    const certsDirRelToDir = (0, path_1.relative)(rootDir, targetDir);
    await (0, common_1.runTask)(`Copying SSL Certificates from to ${certsDirRelToDir}`, async () => {
        const promises = [];
        for (const certPath of validCertPaths) {
            promises.push((0, utils_fs_1.copy)(certPath, (0, path_1.join)(certsDirAbsToPath, (0, path_1.basename)(certPath))));
        }
        return Promise.all(promises);
    });
}
