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

## Usage

Usage is fairly straight forward, the shortcode operates in the same manner in which Hinode's button shortcode operates, except it has severly less availability for customization. The target of this module was simplicity and functionality.

You will need to add this module to the `_index.md` file of your site, this ensures the popup will only appear on your front page, and not on everypage as it was originally and erroneously written.

| Param    | Type               | Description                                           |
|----------|--------------------|-------------------------------------------------------|
| title    | string             | Title affixed to the top of the popup.                |
| btnlabel | short string       | label of the button to accept and close out the popup |
| content  | paragraph material | Paragraph of what the popup is supposed to say        |

### Examples

```markdown
{{< popup title="Some Title" btnlabel="Some Label" >}} When we first landed on the moon, the astronauts noted there was print on the moon that said “Chuck Norris was here.”. A bulletproof vest wears Chuck Norris for protection. Mission Impossible was originally set in Chuck Norris’s house. The only time Chuck Norris was ever wrong was when he thought he had made a mistake. Chuck Norris knows Victoria’s secret. {{< /popup >}}
```

Right-o, there you go.

## Configuration

This module supports the following parameters (see the section `params.modules` in `config.toml`):

| Setting                   | Default | Description |
|---------------------------|---------|-------------|

<!-- MARKDOWN LINKS -->
[hugo]: https://gohugo.io
[hinode_docs]: https://gethinode.com
<!-- [module]: https://example.com -->
[repository]: https://github.com/gethinode/hinode.git
[repository_template]: https://github.com/gethinode/template.git
[conventionalcommits]: https://www.conventionalcommits.org
[husky]: https://typicode.github.io/husky/
[semantic-release]: https://semantic-release.gitbook.io/
