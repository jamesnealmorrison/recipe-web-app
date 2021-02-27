const { Record } = require('immutable')

export const DEFAULT_LOCALE = 'en'

export const AppStateRecord = new Record({
    locale: DEFAULT_LOCALE,
    apiToken: null,
})