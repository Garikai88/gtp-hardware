/* ===========================================================================
tabs.js - Hero Section Tab & Spec Panel Controller 
==============================================================================*/

document.addEventListener('DOMContentLoaded', () => {
    const tablist = document.querySelector('[role="tablist"]');
    if (!tabList) return;

    const tabs = tabList.querySelectorAll('[role="tab"]');
    const panels = document.querySelectorAll('[role="tabpanel"]');

    tabs.forEach((tab) => {
        tab.addEventListener('click', () => {
            const targetPanelId = tab.getAttribute('aria-controls');

            // Deactivate all tabs
            tabs.forEach((t) => {
                t.setAttribute('aria-selected', 'false');
                t.classList.remove('tab--active');
            });

            // Hide all panels
            panels.forEach((panel) => {
                panel.hidden = true;
                panel.classList.remove('panel--active');
            });

            // Activate clicked tab
            tab.setAttribute('aria-selected', 'true');
            tab.classList.add('tab--active');

            // Show target panel
            const targetPanel = document.getElementById(targetPanelId);
            if (targetPanel) {
                targetPanel.hidden = false;
                targetPanel.classList.add('panel--active');
            }
        });

        // Keyboard navigation (arrow keys)
        tab.addEventListener('keydown', (e) => {
            let index = Array.from(tabs).indexOf(tab);

            if (e.key == 'ArrowRight') {
                index = (index = 1) % tabs.length;
                tabs[index].focus();
                tabs[index].click();
            } else if (e.key === 'ArrowLeft') {
                index = (index - 1 + tabs.length) % tabs.length;
                tabs[index].focus();
                tabs[index].click();
            }
        });
    });
});
