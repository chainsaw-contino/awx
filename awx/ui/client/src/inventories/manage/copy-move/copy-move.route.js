/*************************************************
 * Copyright (c) 2016 Ansible, Inc.
 *
 * All Rights Reserved
 *************************************************/
import {templateUrl} from '../../../shared/template-url/template-url.factory';

import CopyMoveGroupsController from './copy-move-groups.controller';
import CopyMoveHostsController from './copy-move-hosts.controller';

var copyMoveGroupRoute = {
    name: 'inventoryManage.copyMoveGroup',
    url: '/copy-move-group/{group_id}',
    data: {
        group_id: 'group_id',
    },
    ncyBreadcrumb: {
        label: "COPY OR MOVE {{item.name}}"
    },
    resolve: {
        group: ['GroupManageService', '$stateParams', function(GroupManageService, $stateParams){
            return GroupManageService.get({id: $stateParams.group_id}).then(res => res.data.results[0]);
        }]
    },
    views: {
        'form@inventoryManage' : {
            controller: CopyMoveGroupsController,
            templateUrl: templateUrl('inventories/manage/copy-move/copy-move'),
        }
    }
};
var copyMoveHostRoute = {
    name: 'inventoryManage.copyMoveHost',
    url: '/copy-move-host/{host_id}',
    ncyBreadcrumb: {
        label: "COPY OR MOVE {{item.name}}"
    },
    resolve: {
        host: ['HostManageService', '$stateParams', function(HostManageService, $stateParams){
            return HostManageService.get({id: $stateParams.host_id}).then(res => res.data.results[0]);
        }]
    },
    views: {
        'form@inventoryManage': {
            templateUrl: templateUrl('inventories/manage/copy-move/copy-move'),
            controller: CopyMoveHostsController,
        }
    }
};

export {copyMoveGroupRoute, copyMoveHostRoute};