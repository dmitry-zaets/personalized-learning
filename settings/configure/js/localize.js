(function (app) {

    app.localize = function (key) {
        return translations[key];
    };

    var translations = {
        'changes are saved': 'All changes are saved',
        'changes are not saved': 'Changes have NOT been saved. Please reload the page and change the settings again. Contact support@easygenerator.com if problem persists.',
        'settings are not initialize': 'Template settings are not initialized. Please reload the page and change the settings again. Contact support@easygenerator.com if problem persists.',

        //results tracking tab
        'results tracking': 'Results Tracking',

        'default': 'easygenerator (recommended)',
        'custom': 'Custom LRS',

        'track and trace settings': 'Track and trace settings',
        'disabled': 'Disabled',
        'enabled': 'Enabled',
        'advanced settings': 'Advanced settings',
        'report to': 'Report to:',
        'custom lrs settings': 'Custom LRS settings',
        'lrs url': 'LRS URL',
        'authentication required': 'Authentication required',
        'lap login': 'LAP login',
        'lap password': 'LAP password',
        'use statements': 'Use statements:',
        'started': 'Started',
        'stopped': 'Stopped',
        'passed': 'Passed',
        'answered': 'Answered',
        'mastered': 'Mastered',
        'failed': 'Failed',

        //template language
        'template language': 'Template language',

        'xx': 'Custom',
        'nl': 'Dutch',
        'en': 'English',
        'ua': 'Ukrainian',

        'choose language for your course': 'Choose language for your course',
        'defaultText': 'Default',
        'translation': 'Translation'
    };

})(window.app = window.app || {});
