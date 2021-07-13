# Bootstrap 5 Quick Snippet - Create snippet in secs.

Simple yet effective **Quick snippet extension** for **Visual Studio Code** ([VSCode](https://code.visualstudio.com/)). This plugin works in both in the stable & the insiders build.

![Plugin in action](https://github.com/anburocky3/bootstrap5-snippets/blob/master/screenshots/help.gif?raw=true)

## Idea

Inspired from [Bootstrap 4, Font awesome 4, Font Awesome 5 Free & Pro snippets](https://marketplace.visualstudio.com/items?itemName=thekalinga.bootstrap4-vscode) plugin. We thought it would be cool, if we have only [Bootstrap 5](https://get.bootstrap.com) snippets. So created it.

## Help

The detailed list of supported template triggers are listed [below](#documentation)

Feel free to let me know what else you want added via the [issues](https://github.com/anburocky3/bootstrap5-snippets/issues)

Suggestions, feedback and other comments welcome via [@anbuselvanrocky](https://twitter.com/anbuselvanrocky) on Twitter.

## Installation (in 2 easy steps)

1. Install plugin
1. Press `F1`, paste `ext install bootstrap5-vscode` & then press `enter` (or)
1. Goto extensions by pressing `Ctrl-Shift-X` (Windows/Linux) or `Cmd-Shift-X` (Mac) & Search for `Bootstrap 5 Quick Snippets`, click on install
1. Reload your editor

You are good to go

## Usage

To use the bootstrap snippets, open a HTML file, and start typing `b5-`, followed by pressing `Ctrl+Space`. A list of bootstrap snippets will show up

The detailed list of supported actions are listed below under documentation section

Here are the conventions that will make it easy to lookup templates

If a template trigger starts with `@` variation, this snippet targets the attribute of an html element in your markup. Think of `@` as `html attribute`

## Mind map

`@` => Targets html attribute

## Changelog

See [here](https://github.com/anburocky3/bootstrap5-snippets/blob/master/CHANGELOG.md)

## Documentation

Here are available live templates

### Bootstrap 5 snippets

#### Bootstrap master template

| Trigger  | Description               |
| -------- | ------------------------- |
| b5-**$** | Bootstrap master template |

#### Alert

| Trigger                         | Description              |
| ------------------------------- | ------------------------ |
| b5-**alert-additional-content** | Alert additional content |
| b5-**alert-closable**           | Alert closable           |
| b5-**alert-default**            | Alert default            |
| b5-**alert-dismissible**        | Alert dismissible        |
| b5-**alert-link**               | Alert link               |

#### Badge

| Trigger              | Description   |
| -------------------- | ------------- |
| b5-**badge-button**  | Badge button  |
| b5-**badge-default** | Badge default |
| b5-**badge-heading** | Badge heading |
| b5-**badge-link**    | Badge link    |
| b5-**badge-pill**    | Badge pill    |

#### Bgroup

| Trigger                         | Description              |
| ------------------------------- | ------------------------ |
| b5-**bgroup-default**           | Bgroup default           |
| b5-**bgroup-dropdown-vertical** | Bgroup dropdown vertical |
| b5-**bgroup-dropdown**          | Bgroup dropdown          |
| b5-**bgroup-size**              | Bgroup size              |
| b5-**bgroup-toolbar**           | Bgroup toolbar           |

#### Breadcrumb

| Trigger                   | Description        |
| ------------------------- | ------------------ |
| b5-**breadcrumb-default** | Breadcrumb default |
| b5-**breadcrumb-list**    | Breadcrumb list    |

#### Button

| Trigger                  | Description       |
| ------------------------ | ----------------- |
| b5-**button-a**          | Button a          |
| b5-**button-block**      | Button block      |
| b5-**button-checkbox**   | Button checkbox   |
| b5-**button-default**    | Button default    |
| b5-**button-disabled-a** | Button disabled a |
| b5-**button-input**      | Button input      |
| b5-**button-outline**    | Button outline    |
| b5-**button-radio**      | Button radio      |
| b5-**button-sizes**      | Button sizes      |
| b5-**button-toggle**     | Button toggle     |

#### Card

| Trigger                       | Description            |
| ----------------------------- | ---------------------- |
| b5-**card-align**             | Card align             |
| b5-**card-background-custom** | Card background custom |
| b5-**card-background**        | Card background        |
| b5-**card-blockquote**        | Card blockquote        |
| b5-**card-border**            | Card border            |
| b5-**card-columns**           | Card columns           |
| b5-**card-decks**             | Card decks             |
| b5-**card-default**           | Card default           |
| b5-**card-grid**              | Card grid              |
| b5-**card-groups**            | Card groups            |
| b5-**card-head-foot**         | Card head foot         |
| b5-**card-links**             | Card links             |
| b5-**card-list**              | Card list              |
| b5-**card-overlay**           | Card overlay           |
| b5-**card-pill-head**         | Card pill head         |
| b5-**card-subtitle**          | Card subtitle          |
| b5-**card-tab-head**          | Card tab head          |

#### Carousel

| Trigger                 | Description      |
| ----------------------- | ---------------- |
| b5-**carousel-caption** | Carousel caption |
| b5-**carousel-default** | Carousel default |

#### Collapse

| Trigger                   | Description        |
| ------------------------- | ------------------ |
| b5-**collapse-accordion** | Collapse accordion |
| b5-**collapse-button**    | Collapse button    |
| b5-**collapse-default**   | Collapse default   |

#### Dropdown

| Trigger                   | Description        |
| ------------------------- | ------------------ |
| b5-**dropdown-alignment** | Dropdown alignment |
| b5-**dropdown-anchor**    | Dropdown anchor    |
| b5-**dropdown-button**    | Dropdown button    |
| b5-**dropdown-colored**   | Dropdown colored   |
| b5-**dropdown-default**   | Dropdown default   |
| b5-**dropdown-sized**     | Dropdown sized     |
| b5-**dropdown-split**     | Dropdown split     |
| b5-**dropdown-up-split**  | Dropdown up split  |
| b5-**dropdown-up**        | Dropdown up        |

#### Form

| Trigger                          | Description               |
| -------------------------------- | ------------------------- |
| b5-**form-checkbox-custom**      | Form checkbox custom      |
| b5-**form-checkbox-inline**      | Form checkbox inline      |
| b5-**form-checkbox-nolabel**     | Form checkbox nolabel     |
| b5-**form-checkbox**             | Form checkbox             |
| b5-**form-email**                | Form email                |
| b5-**form-file-custom**          | Form file custom          |
| b5-**form-file**                 | Form file                 |
| b5-**form-grid**                 | Form grid                 |
| b5-**form-group-text**           | Form group text           |
| b5-**form-group**                | Form group                |
| b5-**form-help-text-inline**     | Form help text inline     |
| b5-**form-help-text**            | Form help text            |
| b5-**form-hidden**               | Form hidden               |
| b5-**form-inline**               | Form inline               |
| b5-**form-input-sizing**         | Form input sizing         |
| b5-**form-input-text**           | Form input text           |
| b5-**form-input**                | Form input                |
| b5-**form-multi-select-custom**  | Form multi select custom  |
| b5-**form-multi-select**         | Form multi select         |
| b5-**form-multil-select-sizing** | Form multil select sizing |
| b5-**form-password**             | Form password             |
| b5-**form-radio-custom**         | Form radio custom         |
| b5-**form-radio-inline**         | Form radio inline         |
| b5-**form-radio-nolabel**        | Form radio nolabel        |
| b5-**form-radio**                | Form radio                |
| b5-**form-reset**                | Form reset                |
| b5-**form-select-custom**        | Form select custom        |
| b5-**form-select-sizing**        | Form select sizing        |
| b5-**form-select**               | Form select               |
| b5-**form-submit**               | Form submit               |
| b5-**form-textarea**             | Form textarea             |
| b5-**form-validation**           | Form validation           |

#### Igroup

| Trigger                          | Description               |
| -------------------------------- | ------------------------- |
| b5-**igroup-button**             | Igroup button             |
| b5-**igroup-checkbox-radio**     | Igroup checkbox radio     |
| b5-**igroup-dropdown-segmented** | Igroup dropdown segmented |
| b5-**igroup-dropdown**           | Igroup dropdown           |
| b5-**igroup-size**               | Igroup size               |
| b5-**igroup-text-both**          | Igroup text both          |
| b5-**igroup-text-prefix**        | Igroup text prefix        |
| b5-**igroup-text-sufix**         | Igroup text sufix         |

#### Jumbotron

| Trigger                  | Description       |
| ------------------------ | ----------------- |
| b5-**jumbotron-default** | Jumbotron default |
| b5-**jumbotron-fluid**   | Jumbotron fluid   |

#### List

| Trigger             | Description  |
| ------------------- | ------------ |
| b5-**list-a**       | List a       |
| b5-**list-badge**   | List badge   |
| b5-**list-button**  | List button  |
| b5-**list-colors**  | List colors  |
| b5-**list-custom**  | List custom  |
| b5-**list-default** | List default |

#### Modal

| Trigger                | Description     |
| ---------------------- | --------------- |
| b5-**modal-customize** | Modal customize |
| b5-**modal-default**   | Modal default   |
| b5-**modal-grid**      | Modal grid      |
| b5-**modal-sizes**     | Modal sizes     |

#### Nav

| Trigger                            | Description                 |
| ---------------------------------- | --------------------------- |
| b5-**nav-a**                       | Nav a                       |
| b5-**nav-complete**                | Nav complete                |
| b5-**nav-tabs-pills-a-variation**  | Nav tabs pills a variation  |
| b5-**nav-tabs-pills-dropdown**     | Nav tabs pills dropdown     |
| b5-**nav-tabs-pills-ul-variation** | Nav tabs pills ul variation |
| b5-**nav-ul**                      | Nav ul                      |

#### Navbar

| Trigger                        | Description             |
| ------------------------------ | ----------------------- |
| b5-**navbar-background-color** | Navbar background color |
| b5-**navbar-background**       | Navbar background       |
| b5-**navbar-default**          | Navbar default          |
| b5-**navbar-minimal-a**        | Navbar minimal a        |
| b5-**navbar-minimal-ul**       | Navbar minimal ul       |
| b5-**navbar-non-responsive**   | Navbar non responsive   |
| b5-**navbar-placement**        | Navbar placement        |

#### Pagination

| Trigger                     | Description          |
| --------------------------- | -------------------- |
| b5-**pagination-alignment** | Pagination alignment |
| b5-**pagination-default**   | Pagination default   |
| b5-**pagination-sized**     | Pagination sized     |

#### Popover

| Trigger                    | Description         |
| -------------------------- | ------------------- |
| b5-**popover-default**     | Popover default     |
| b5-**popover-direction**   | Popover direction   |
| b5-**popover-dismissable** | Popover dismissable |

#### Progress

| Trigger                 | Description      |
| ----------------------- | ---------------- |
| b5-**progress-colored** | Progress colored |
| b5-**progress-default** | Progress default |
| b5-**progress-ie9**     | Progress ie9     |
| b5-**progress-striped** | Progress striped |

#### Scrollspy

| Trigger                  | Description       |
| ------------------------ | ----------------- |
| b5-**scrollspy-default** | Scrollspy default |

#### Tooltip

| Trigger                | Description     |
| ---------------------- | --------------- |
| b5-**tooltip-default** | Tooltip default |

#### Figure

| Trigger               | Description    |
| --------------------- | -------------- |
| b5-**figure-default** | Figure default |

#### Image

| Trigger              | Description   |
| -------------------- | ------------- |
| b5-**image-default** | Image default |

#### Table

| Trigger              | Description   |
| -------------------- | ------------- |
| b5-**table-default** | Table default |
| b5-**table-special** | Table special |

#### Typography

| Trigger                              | Description                   |
| ------------------------------------ | ----------------------------- |
| b5-**typography-blockquote-reverse** | Typography blockquote reverse |
| b5-**typography-blockquote**         | Typography blockquote         |
| b5-**typography-description-list**   | Typography description list   |
| b5-**typography-display-heading**    | Typography display heading    |
| b5-**typography-lead**               | Typography lead               |
| b5-**typography-list-inline**        | Typography list inline        |
| b5-**typography-list-unstyled**      | Typography list unstyled      |
| b5-**typography-muted-text**         | Typography muted text         |

#### Grid

| Trigger                     | Description          |
| --------------------------- | -------------------- |
| b5-**grid-col**             | Grid col             |
| b5-**grid-container-fluid** | Grid container fluid |
| b5-**grid-container**       | Grid container       |
| b5-**grid-default**         | Grid default         |
| b5-**grid-row**             | Grid row             |

#### Media

| Trigger              | Description   |
| -------------------- | ------------- |
| b5-**media-bottom**  | Media bottom  |
| b5-**media-default** | Media default |
| b5-**media-list**    | Media list    |
| b5-**media-middle**  | Media middle  |
| b5-**media-nesting** | Media nesting |
| b5-**media-right**   | Media right   |
| b5-**media-top**     | Media top     |

#### Responsive

| Trigger                      | Description           |
| ---------------------------- | --------------------- |
| b5-**responsive-hide-down**  | Responsive hide down  |
| b5-**responsive-hide-up**    | Responsive hide up    |
| b5-**responsive-print-show** | Responsive print show |

## Authors

- [Anbuselvan Annamalai](https://facebook.com/anburocky3)
- Special thanks to [Ashok Koyi](https://github.com/thekalinga)

## License

[MIT](./LICENSE.md) - (Do whatever you want)
