var Checkur = (function() {
    
    function findCheckboxesByClassName(className) {
        const checkboxes = document.querySelectorAll(`input[type="checkbox"].${className}`);
        return Array.from(checkboxes);
    }
    
    function addCheckboxEventHandlers(className) {
        const checkboxes = findCheckboxesByClassName(className);
    
        checkboxes.forEach((checkbox) => {
            checkbox.addEventListener('change', function() {
                if (this.checked) {
                    console.log("This checkbox is checked.");
                } else {
                    console.log("This checkbox is unchecked.");
                }
    
                localStorage.setItem(`${className}_${checkbox.id}`, this.checked);
            });
        });
    }
    
    function restoreCheckboxStateFromLocalStorage(className) {
        const checkboxes = findCheckboxesByClassName(className);
    
        checkboxes.forEach((checkbox) => {
            const storedState = localStorage.getItem(`${className}_${checkbox.id}`);
            if (storedState !== null) {
                checkbox.checked = storedState === 'true';
            }
        });
    }
    
    function init(className) {
        restoreCheckboxStateFromLocalStorage(className)
        addCheckboxEventHandlers(className)
    }

    return {
        init: init
    };
})();