import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id       : 'overview',
        title    : 'Overview',
        translate: 'NAV.OVERVIEW',
        type     : 'group',
        children : [
            {
                id       : 'home',
                title    : 'Home',
                translate: 'NAV.HOME.TITLE',
                type     : 'item',
                icon     : 'home',
                url      : '/home'
            }
        ]
    },
    {
        id       : 'skill-management',
        title    : 'Skill Management',
        translate: 'NAV.SKILLS',
        type     : 'group',
        children : [
            {
                id       : 'skills',
                title    : 'Skills',
                translate: 'NAV.SKILL_ITEMS.SKILLS',
                type     : 'item',
                icon     : 'trending_up',
                url      : '/skill-management/skills'
            },
            {
                id       : 'employee-skills',
                title    : 'Employees',
                translate: 'NAV.SKILL_ITEMS.EMPLOYEE',
                type     : 'item',
                icon     : 'people',
                url      : '/skill-management/employees'
            },
            {
                id       : 'skill-sources',
                title    : 'Learning Sources',
                translate: 'NAV.SKILL_ITEMS.SOURCES',
                type     : 'item',
                icon     : 'timelapse',
                url      : '/skill-management/sources'
            }
        ]
    },
    {
        id       : 'projects',
        title    : 'Projects',
        translate: 'NAV.APPLICATIONS',
        type     : 'group',
        children : [
            {
                id       : 'project-dashboard',
                title    : 'Project Dashboard',
                translate: 'NAV.PROJECTS_DASHBOARD',
                type     : 'item',
                icon     : 'dashboard',
                url      : '/project/dashboard',
            },
            {
                id       : 'project-manage',
                title    : 'Manage Projects',
                translate: 'NAV.MANAGE_PROJECTS',
                type     : 'item',
                icon     : 'build',
                url      : '/project/manage',
            }
        ]
    }
];
