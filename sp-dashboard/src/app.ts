import { Dashboard, ItemForm } from "dattatable";
import { Components } from "gd-sprest-bs";
import * as jQuery from "jquery";
import { DataSource, IItem } from "./ds";
import { DataItem, DataSet, DataView, Timeline } from "vis";
import Strings from "./strings";

/**
 * Main Application
 */
export class App {
    // Constructor
    constructor(el: HTMLElement) {
        // Set the list name
        ItemForm.ListName = Strings.Lists.Main;

        // Initialize the application
        DataSource.init().then(() => {
            // Render the dashboard
            this.render(el);
        });
    }

    // Renders the dashboard
    private render(el: HTMLElement) {
        let timelineSpan = document.createElement("span");
        timelineSpan.id = "visualization";

        // Create a DataSet (allows two way data-binding)
        var items = new DataSet([
            {id: 1, content: 'item 1', start: '2013-04-20'},
            {id: 2, content: 'item 2', start: '2013-04-14'},
            {id: 3, content: 'item 3', start: '2013-04-18'},
            {id: 4, content: 'item 4', start: '2013-04-16', end: '2013-04-19'},
            {id: 5, content: 'item 5', start: '2013-04-25'},
            {id: 6, content: 'item 6', start: '2013-04-27'}
        ]);

        // Configuration for the Timeline
        var options = {};

        // Create a Timeline
        var timeline = new Timeline(timelineSpan, items, options);

        // Create the dashboard
        // let dashboard = new Dashboard({
        //     el,
        //     hideHeader: true,
        //     useModal: true,
        //     filters: {
        //         items: [{
        //             header: "By Status",
        //             items: DataSource.StatusFilters,
        //             onFilter: (value: string) => {
        //                 // Filter the table
        //                 dashboard.filter(2, value);
        //             }
        //         }]
        //     },
        //     navigation: {
        //         title: Strings.ProjectName,
        //         items: [
        //             {
        //                 className: "btn-outline-light",
        //                 text: "Create Item",
        //                 isButton: true,
        //                 onClick: () => {
        //                     // Create an item
        //                     ItemForm.create({
        //                         onUpdate: () => {
        //                             // Load the data
        //                             DataSource.load().then(items => {
        //                                 // Refresh the table
        //                                 dashboard.refresh(items);
        //                             });
        //                         }
        //                     });
        //                 }
        //             }
        //         ]
        //     },
        //     footer: {
        //         itemsEnd: [
        //             {
        //                 text: "v" + Strings.Version
        //             }
        //         ]
        //     },
        //     table: {
        //         rows: DataSource.Items,
        //         dtProps: {
        //             dom: 'rt<"row"<"col-sm-4"l><"col-sm-4"i><"col-sm-4"p>>',
        //             columnDefs: [
        //                 {
        //                     "targets": 0,
        //                     "orderable": false,
        //                     "searchable": false
        //                 }
        //             ],
        //             createdRow: function (row, data, index) {
        //                 jQuery('td', row).addClass('align-middle');
        //             },
        //             drawCallback: function (settings) {
        //                 let api = new jQuery.fn.dataTable.Api(settings) as any;
        //                 jQuery(api.context[0].nTable).removeClass('no-footer');
        //                 jQuery(api.context[0].nTable).addClass('tbl-footer');
        //                 jQuery(api.context[0].nTable).addClass('table-striped');
        //                 jQuery(api.context[0].nTableWrapper).find('.dataTables_info').addClass('text-center');
        //                 jQuery(api.context[0].nTableWrapper).find('.dataTables_length').addClass('pt-2');
        //                 jQuery(api.context[0].nTableWrapper).find('.dataTables_paginate').addClass('pt-03');
        //             },
        //             headerCallback: function (thead, data, start, end, display) {
        //                 jQuery('th', thead).addClass('align-middle');
        //             },
        //             // Order by the 1st column by default; ascending
        //             order: [[1, "asc"]]
        //         },
        //         columns: [
        //             {
        //                 name: "",
        //                 title: "Title",
        //                 onRenderCell: (el, column, item: IItem) => {
        //                     // Render a buttons
        //                     Components.ButtonGroup({
        //                         el,
        //                         buttons: [
        //                             {
        //                                 text: item.Title,
        //                                 type: Components.ButtonTypes.OutlinePrimary,
        //                                 onClick: () => {
        //                                     // Show the display form
        //                                     ItemForm.view({
        //                                         itemId: item.Id
        //                                     });
        //                                 }
        //                             },
        //                             {
        //                                 text: "Edit",
        //                                 type: Components.ButtonTypes.OutlineSuccess,
        //                                 onClick: () => {
        //                                     // Show the edit form
        //                                     ItemForm.edit({
        //                                         itemId: item.Id,
        //                                         onUpdate: () => {
        //                                             // Refresh the data
        //                                             DataSource.load().then(items => {
        //                                                 // Update the data
        //                                                 dashboard.refresh(items);
        //                                             });
        //                                         }
        //                                     });
        //                                 }
        //                             }
        //                         ]
        //                     });
        //                 }
        //             },
        //             {
        //                 name: "ItemType",
        //                 title: "Item Type"
        //             },
        //             {
        //                 name: "Status",
        //                 title: "Status"
        //             }
        //         ]
        //     }
        // });
    }
}