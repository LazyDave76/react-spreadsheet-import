import { jsx } from 'react/jsx-runtime';
import merge from 'lodash/merge';
import { Steps } from './steps/Steps.js';
import { themeOverrides } from './theme.js';
import { Providers } from './components/Providers.js';
import { ModalWrapper } from './components/ModalWrapper.js';
import { translations } from './translationsRSIProps.js';

const defaultTheme = themeOverrides;
const defaultRSIProps = {
    autoMapHeaders: true,
    allowInvalidSubmit: true,
    autoMapDistance: 2,
    translations: translations,
    uploadStepHook: async (value) => value,
    selectHeaderStepHook: async (headerValues, data) => ({ headerValues, data }),
    matchColumnsStepHook: async (table) => table,
};
const ReactSpreadsheetImport = (props) => {
    const mergedTranslations = props.translations !== translations ? merge(translations, props.translations) : translations;
    const mergedThemes = merge(defaultTheme, props.customTheme);
    return (jsx(Providers, { theme: mergedThemes, rsiValues: { ...props, translations: mergedTranslations }, children: jsx(ModalWrapper, { isOpen: props.isOpen, onClose: props.onClose, children: jsx(Steps, {}) }) }));
};
ReactSpreadsheetImport.defaultProps = defaultRSIProps;

export { ReactSpreadsheetImport, defaultRSIProps, defaultTheme };
