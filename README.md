<a href="https://quiltmc.org"><img src="https://github.com/SplendidAlakey/Perfectly-Splendid/blob/Perfectly-Splendid/images/screens/main_1.webp"></a>

<h1 align="center"><a href="https://www.curseforge.com/minecraft/modpacks/perfectly-splendid"><img src="https://cf.way2muchnoise.eu/versions/For%20Minecraft_perfectly-splendid_all.svg" alt="CF"></a></h1>

<p align="center"><img src="https://github.com/SplendidAlakey/Perfectly-Splendid/blob/Perfectly-Splendid/images/screens/main_2.webp" width="360">
<img src="https://github.com/SplendidAlakey/Perfectly-Splendid/blob/Perfectly-Splendid/images/screens/main_3.webp" width="360"></p>

<p align="center"><img src="https://github.com/SplendidAlakey/Perfectly-Splendid/blob/Perfectly-Splendid/images/screens/main_4.webp" width="360">
<img src="https://github.com/SplendidAlakey/Perfectly-Splendid/blob/Perfectly-Splendid/images/screens/main_5.webp" width="360"></p>

## 🔨 Installing the modpack

The pack is possible to install with any launcher, however, I can only fully support 3 methods: Vanilla Launcher; CurseForge app; Prism Launcher.

⚠ Warning ⚠ MultiMC users: at the time of writing this, MMC has a bug, that prevents Narrator Library from working, breaking text-to-speech blocks from Supplementaries. Otherwise, MultiMC is fully supported, but you will have to use something else to download the mods.

<details><summary>Using Prism Launcher (recommended):</summary>
<p>

1. Download and install Prism Launcher https://prismlauncher.org/download/
2. Open Prism Launcher, right-click anywhere and choose "Create instance"
3. On the left side panel select "CurseForge", look up Perfectly Splendid and install it

</p>
</details>

<details><summary>Using CurseForge app (Windows only):</summary>
<p>

1. Download and install CurseForge app https://download.curseforge.com/
2. Open the app and let it find your Minecraft installation
3. Navigate to the Minecraft tab, select "Browse modpacks", search for Perfectly Splendid and install it

</p>
</details>

<details><summary>Using vanilla launcher (not recommended):</summary>
<p>

1. Install the 1.19.2 version of the game and make sure it works without any mods
2. Navigate to https://quiltmc.org/en/install/client/ and follow the instructions to install Quilt Loader 0.18.10
3. Navigate to https://www.curseforge.com/minecraft/mc-mods/qsl and download QSL, then put it into the .minecraft/mods folder. If such a folder doesn't exist, simply create one.
4. Navigate to https://www.curseforge.com/minecraft/modpacks/perfectly-splendid, choose the latest version of the pack and scroll down until you see the list of included mods
5. Download every mod, make sure to use the correct versions, and put them all into the mods folder (some mods must be a specific version, to make the process easier find a way to download mods automatically using the pack's zip, rather than manually)
6. Download the modpack file and extract the "config", "defaultconfigs", "shaderpacks" and "kubejs" folders from it, put them all in .minecraft/
7. Launch the game using the Quilt profile in the launcher

</p>
</details>

<details><summary>Recommended JVM arguments</summary>
<p>

Using the recommended flags is not necessary, but it might significantly boost your performance, when generating new chunks and running garbage collection.

The pack was tested on default Java installations shipped with vanilla launcher and CF app, as well as Adoptium JDK 17 and 19.

The pack was tested with default Java arguments provided by vanilla launcher and CF app.

<p> Absolute maximum required allocated memory for the pack is 12GB </p>
<p> 10GB is recommended, if you use Super Duper Vanilla shaders (default). </p>
<p> 8GB is recommended, if you don't use any shaders. </p>
<p> 6-8GB is recommended, if your world is pregenerated or you play on a server. </p>
<p> The recommended memory allocation for servers is 10-12GB. </p>

The lower your RAM, the longer it will take for the game to load and generate chunks!

Recommended JVM flags (add -Xmx and -Xms, if you don't use Prism or MMC):
```
-XX:+UnlockExperimentalVMOptions -XX:+UnlockDiagnosticVMOptions -XX:+AlwaysActAsServerClassMachine -XX:+AlwaysPreTouch -XX:+DisableExplicitGC -XX:+UseNUMA -XX:AllocatePrefetchStyle=3 -XX:NmethodSweepActivity=1 -XX:ReservedCodeCacheSize=400M -XX:NonNMethodCodeHeapSize=12M -XX:ProfiledCodeHeapSize=194M -XX:NonProfiledCodeHeapSize=194M -XX:-DontCompileHugeMethods -XX:+PerfDisableSharedMem -XX:+UseFastUnorderedTimeStamps -XX:+UseCriticalJavaThreadPriority -XX:+EagerJVMCI -Dgraal.TuneInlinerExploration=1 -Dgraal.CompilerConfiguration=enterprise
```
In order to fully utilise these flags, you have to be using GraalVM as your game's JDK. You can find the download links [here](https://github.com/brucethemoose/Minecraft-Performance-Flags-Benchmarks#graalvm-enterprise-edition). You want to grab the Java 17 one.
The flags were taken from [this](https://github.com/brucethemoose/Minecraft-Performance-Flags-Benchmarks) guide. You can read the full thing and explanation for the flags there.
Using GraalVM with the flags above **significantly** reduces the amount of time it takes for the game to load, as well as speeds up worldgen.

Alternatively, if you are using a supported JDK (e.g. Eclipse Adoptium), then you can try ShenandoahGC (add -Xmx and -Xms, if you don't use Prism or MMC):
```
-XX:+UseShenandoahGC -XX:MaxGCPauseMillis=50 -Xmn512M
```
These flags work well enough, if you don't want to use GraalVM. But the loading times will be considerably longer and chunks will take more time to generate.

Prism users may also tick "Skip Java compatibility checks", if using Adoptium JDK 17 or 19.

</p>
</details>

You can also try increasing your pagefile size, if you are on Windows and struggling with loading times. I'm using 40GB for other games' modpacks, but you can probably set it to something like 10-15GB for Minecraft.

## 💭 Already tried Perfectly Splendid? Would like to report an issue or send feedback?

- If you encounter any issues with the pack or have a suggestion, open an issue on [Perfectly Splendid GitHub](https://github.com/SplendidAlakey/Perfectly-Splendid/issues).
- If you would like to ask a question, use the discussions tab on [Perfectly Splendid GitHub](https://github.com/SplendidAlakey/Perfectly-Splendid/discussions).

## ❔ If you have more questions before installing I might've already answered some of them [here](https://github.com/SplendidAlakey/Perfectly-Splendid/discussions/3)!

### 📌 Known issues

<details><summary>First ever launch "crashes" with an "internal error" message.</summary>

  **Status**: ❌ Reported.

  **Severity**: Low. 

  **Workarounds**: Simply launch the game again. I think this is due to JumpQuilt technically being run on Forge to download Quilt. You don't need to report this to Quilt, as it says.
  
  <p align="center"><img src="https://github.com/SplendidAlakey/Perfectly-Splendid/blob/Perfectly-Splendid/images/extras/First_ever_crash.png" width="360"></p>

</details>

<details><summary>Log Begone is only partially working in Update 6 and above.</summary>

  **Status**: ❌ Reported.

  **Severity**: Low. 

  **Workarounds**: None convenient. You'd need to downgrade your Quilt Loader to a version, that works with Log Begone, but I can't guarantee old QL versions will work with the pack anymore.

</details>

<details><summary>The Bumblezone is completely dark, when using shaders.</summary>

  **Status**: ❌ The developer is aware.

  **Severity**: Low. 

  **Workarounds**: Simply disable shaders, when travelling there.

</details>

<details><summary>Graveyard Biomes are way too bright with shaders.</summary>

  **Status**: ❌ Not reported.

  **Severity**: Low. 

  **Workarounds**: Again, just disable shaders, when in those biomes.

</details>

<details><summary>Glass pane culls incorrectly with connected glass pane blocks.</summary>

  **Status**: ✅ Intended.

  **Severity**: Low. 

  **Workarounds**: You can enable a built-in Continuity resource pack called "glass pane culling fix", however, doing so will break culling for unconnected double stacked glass panes and similar blocks (see Continuity GitHub for pictures).

</details>

<details><summary>Spawn eggs aren't grouped in REI.</summary>

  **Status**: ❌ Reported.

  **Severity**: Low. 

  **Workarounds**: Disable Inspecio.

</details>

<details><summary>Sometimes the saving world screen gets stuck.</summary>

  **Status**: 🔳 Not consistently reproducible.

  **Severity**: Low. 

  **Workarounds**: Feel free to just force close the game, if your console logging stopped at "Saving chunks", your world should be fully saved at this point. Or disable C2ME.

</details>


**@Credits**: 

- [telepathicgrunt](https://www.curseforge.com/members/telepathicgrunt/projects) for compatibility datapacks between YUNG's mods and others.
- [eldeston](https://www.curseforge.com/minecraft/customization/super-duper-vanilla-shaders) for Super Duper Vanilla Shaders.
- [OpenClipart-Vectors](https://pixabay.com/users/openclipart-vectors-30363/) for the background picture I use for the datapack icons.

3rd party mods with permissive licenses. If you are a developer of one of the following mods and wish for me to take it down - contact me by any means and I will remove your mod from my pack:

- [Babies Forever](https://modrinth.com/mod/roundaround-babies-forever) by Roundaround
- [Better Nether Map](https://modrinth.com/mod/better-nether-map) by Jummit
- [Iris](https://modrinth.com/mod/iris) by IMS212
- [Rotation Locker](https://modrinth.com/mod/rotationlocker) by Beefox

<h1 align="center"> 🌈 Thank you for playing Perfectly Splendid! 🌈 </h1>