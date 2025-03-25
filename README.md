# Hinode Module - Template

<!-- Tagline -->
<p align="center">
    <b>A template to define a Hugo module compatible with Hinode</b>
    <br />
</p>

<!-- Badges -->
<p align="center">
    <a href="https://gohugo.io" alt="Hugo website">
        <img src="https://img.shields.io/badge/generator-hugo-brightgreen">
    </a>
    <a href="https://gethinode.com" alt="Hinode theme">
        <img src="https://img.shields.io/badge/theme-hinode-blue">
    </a>
    <a href="https://github.com/anoduck/mod-popup/commits/main" alt="Last commit">
        <img src="https://img.shields.io/github/last-commit/anoduck/mod-popup.svg">
    </a>
    <a href="https://github.com/anoduck/mod-popup/issues" alt="Issues">
        <img src="https://img.shields.io/github/issues/anoduck/mod-popup.svg">
    </a>
    <a href="https://github.com/anoduck/mod-popup/pulls" alt="Pulls">
        <img src="https://img.shields.io/github/issues-pr-raw/anoduck/mod-popup.svg">
    </a>
    <a href="https://github.com/anoduck/mod-popup/blob/main/LICENSE" alt="License">
        <img src="https://img.shields.io/github/license/anoduck/mod-popup">
    </a>
</p>

## About

![Logo](https://raw.githubusercontent.com/gethinode/hinode/main/static/img/logo.png)

Hinode is a clean blog theme for [Hugo][hugo], an open-source static site generator. Hinode is available as a [template][repository_template], and a [main theme][repository]. <!-- This repository maintains a Hugo module to add [module][module] to a Hinode site. --> Visit the Hinode documentation site for [installation instructions][hinode_docs].

## Contributing

This module uses [semantic-release][semantic-release] to automate the release of new versions. The package uses `husky` and `commitlint` to ensure commit messages adhere to the [Conventional Commits][conventionalcommits] specification. You can run `npx git-cz` from the terminal to help prepare the commit message.

## Reasoning

The target of this module was simplicity and functionality, but development of it was anything but, and it took three times longer than originally planned.

## Usage

Usage is fairly straight forward, You will need to add a reference for the partial to a local copy of the
`/layouts/_default/baseof.html` file. This is a 'necessary evil', as regardless of it being common practice, it does
mean the site owner will have to pay attention to when and if this page changes upstream. A local copy can be downloaded from
[Here](https://github.com/gethinode/hinode/blob/main/exampleSite/layouts/_default/baseof.html). There reference will
need to be added at the bottom of the body right before any reference to javascript sources are mentioned. The remaining
arguments for the module will need to be set inside the site parameter configuration file `params.toml`.

Below is an example of the syntax that will need to be included in the `baseof.html` file. Do not forget the period
after the partial reference, it is important.

```html
{{ if .Site.Params.main.footerBelowFold }}
    {{- partial "footer/social.html" . -}}
    {{- partial "footer/footer.html" . -}}
{{ end }}
<!-- Please popup reference Here -->
{{- partial "footer/popup.html" . -}}
{{- partial "footer/toast-container.html" . -}}
{{- partial "assets/symbols.html" . -}}
{{- partialCached "footer/scripts.html" (dict "page" .) -}}
{{- partial "footer/scripts.html" (dict "page" . "type" "optional") -}}
```

## Configuration

This module supports the following parameters (see the section `params.modules` in `config.toml`):

| Param    | Type               | Description                                           |
|----------|--------------------|-------------------------------------------------------|
| debug    | boolean            | Whether to enable debug output on page or not.        |
| disable  | boolean            | Whether to disable the popup feature altogether.      |
| title    | string             | Title affixed to the top of the popup.                |
| image    | url                | Url to the image for use.                             |
| alt      | alternative text   | Alternative for the image.                            |
| btnlabel | short string       | label of the button to accept and close out the popup |
| content  | paragraph material | Paragraph of what the popup is supposed to say        |

<!-- MARKDOWN LINKS -->
[hugo]: https://gohugo.io
[hinode_docs]: https://gethinode.com
<!-- [module]: https://example.com -->
[repository]: https://github.com/gethinode/hinode.git
[repository_template]: https://github.com/gethinode/template.git
[conventionalcommits]: https://www.conventionalcommits.org
[husky]: https://typicode.github.io/husky/
[semantic-release]: https://semantic-release.gitbook.io/
