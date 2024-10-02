pluginManagement {
    repositories {
        google {
            content {
                includeGroupByRegex("com\\.android.*")
                includeGroupByRegex("com\\.google.*")
                includeGroupByRegex("androidx.*")
            }
        }
        mavenCentral()
        gradlePluginPortal()
    }
}
dependencyResolutionManagement {
    repositoriesMode.set(RepositoriesMode.FAIL_ON_PROJECT_REPOS)
    repositories {
        google()
        mavenCentral()
    }
}

rootProject.name = "KotlinStudy"
include(":KotlinStudy_b")
include(":step02_event")
include(":step02_event2")
include(":step03_listvuew")
include(":myapplication")
include(":step04_webview")
include(":step05_menuitem")
include(":step05httprequest")
include(":step06coroutine")
include(":step07customlistview")
include(":step07gallery")
include(":step08fragment")
include(":step09customview")
include(":step09example")
include(":step09gameview")
include(":step10reactapp")
