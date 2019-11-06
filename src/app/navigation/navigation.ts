import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id       : 'overview',
        title    : 'General',
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
        id       : 'org-nav',
        title    : 'Organization',
        translate: 'NAV.ROLE',
        type     : 'group',
        children : [
            {
                id       : 'roles-id',
                title    : 'Roles',
                translate: 'NAV.ROLE_ITEMS.ROLES',
                type     : 'item',
                icon     : 'recent_actors',
                url      : 'roles'
            },
            {
                id       : 'employees-id',
                title    : 'Employees',
                translate: 'NAV.SKILL_ITEMS.EMPLOYEE',
                type     : 'item',
                icon     : 'people',
                url      : '/employees'
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
                url      : '/skills'
            },
            {
                id       : 'skill-sources',
                title    : 'Learning Sources',
                translate: 'NAV.SKILL_ITEMS.SOURCES',
                type     : 'item',
                icon     : 'timelapse',
                url      : '/knowledge-source/list'
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
