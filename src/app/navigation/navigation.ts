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
    },
    {
        id       : 'team',
        title    : 'Team',
        translate: 'NAV.TEAM',
        type     : 'group',
        children : [
            {
                id       : 'team-dashboard',
                title    : 'Team Dashboard',
                translate: 'NAV.TEAM_DASHBOARD',
                type     : 'item',
                icon     : 'how_to_reg',
                url      : '/project/dashboard',
            },
            {
                id       : 'team-manage',
                title    : 'Manage Team',
                translate: 'NAV.MANAGE_TEAM',
                type     : 'item',
                icon     : 'people',
                url      : '/project/manage',
            }
        ]
    },
    {
        id       : 'campus',
        title    : 'Campus',
        translate: 'NAV.CAMPUS',
        type     : 'group',
        children : [
            {
                id       : 'courses',
                title    : 'Courses',
                translate: 'NAV.COURSES',
                type     : 'item',
                icon     : 'school',
                url      : '/campus/courses',
            }
        ]
    }
];
