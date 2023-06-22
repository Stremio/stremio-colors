group = "com.github.Stremio"
version = "5.2.0"

buildscript {
    dependencies {
        classpath("com.android.tools.build:gradle:7.4.2")
        classpath("org.jetbrains.kotlin:kotlin-gradle-plugin:1.8.20")
    }
}

plugins {
    kotlin("multiplatform")
    id("org.jetbrains.compose")
    id("maven-publish")
    id("com.android.library")
}

repositories {
    mavenCentral()
    google()
}

kotlin {
    android {
        publishLibraryVariants("release")
    }

    @Suppress("UNUSED_VARIABLE")
    sourceSets {
        val commonMain by getting {
            dependencies {
                api(compose.runtime)
            }
        }
        val androidMain by getting
    }
}

android {
    defaultConfig {
        minSdk = 22
        compileSdk = 33
    }

     sourceSets {
        getByName("main") {
            manifest.srcFile("src/androidMain/AndroidManifest.xml")
        }
    }
}
