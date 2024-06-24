import xml2js from 'xml2js';
export declare function readXML(path: string): Promise<any>;
export declare function parseXML(xmlStr: string, options?: xml2js.OptionsV2): any;
export declare function writeXML(object: any): Promise<any>;
export declare function buildXmlElement(configElement: any, rootName: string): string;
