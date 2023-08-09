type optionType = {
    exclude?: {
        domain?: string | string[];
        path?: string | string[];
    };
};
export default function isUrl(url: string, opt?: optionType): boolean;
export {};
