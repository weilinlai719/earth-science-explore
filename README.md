# Thermal Variability Analysis: ENSO & Global Warming in the Taiwan Region

A comprehensive data-driven inquiry into the sea-air temperature coupling patterns during El Niño (2016) and La Niña (2021) events, with an analysis of long-term climate baseline shifts.

## 🚀 Project Overview
This project investigates how large-scale climate oscillations (ENSO) interact with regional geography and global warming trends. It utilizes a multi-disciplinary tech stack to bridge the gap between raw geophysical datasets and high-fidelity academic reporting.

---

## 🛠️ Technical Implementation

### 1. Data Acquisition & Sourcing
* **Engine:** JavaScript `fetch` API.
* **Source:** [NOAA Physical Sciences Laboratory (PSL)](https://psl.noaa.gov/).
* **Method:** Asynchronous retrieval of Sea Surface Temperature Anomaly (SSTA) and terrestrial temperature data via ERDDAP servers.

### 2. Data Engineering
* **Processing:** Python (utilizing **Xarray**, **Pandas**, and **NumPy**).
* **Workflow:** * Slicing (cutting) multidimensional NetCDF data to specific regional coordinates ($118^\circ E$–$122^\circ E$, $21^\circ N$–$26^\circ N$).
    * Statistical computation of regional means and anomaly distributions.
    * Correlation analysis (calculating $R^2$) to quantify sea-air coupling strength.

### 3. Visualization & Web Development
* **Plotting:** **Plotly** (Python/JS). Developed interactive scatter plots and heatmaps to visualize the "Baseline Shift" phenomenon where modern neutral years exceed historical El Niño temperatures.
* **Framework:** **Astro**. Built a high-performance, static-site inquiry platform to host research findings and interactive data modules.
* **URL:** [Earth Science Explore Website](https://weilinlai719.github.io/earth-science-explore/)

### 4. Academic Archiving
* **Typesetting:** **LaTeX**.
* **Format:** The final report is authored in LaTeX to ensure rigorous academic standards, featuring complex mathematical notation for thermodynamic variables and precise figure referencing.

---

## 🔬 Key Scientific Findings
1.  **Spatial Heterogeneity:** The shallow **Taiwan Strait** exhibits higher sensitivity to atmospheric forcing (subsidence) compared to the thermally stable **Kuroshio Current** path.
2.  **Multiscale Interaction:** Observed that 21st-century climate variability is no longer a simple cycle; it is the **superposition** of interannual ENSO signals on a rising long-term global warming trend.
3.  **Mechanism Logic:** Verified the teleconnection between the Eastward shift of the **Walker Circulation** and the intensification of the Western Pacific Subtropical High (WPSH) during 2016.

---

## 📂 Repository Structure
```text
├── src/                # Astro website source code
├── scripts/            # Python data slicing and processing scripts
├── data/               # Processed JSON/CSV datasets from NOAA
├── report/             # LaTeX source (.tex) and compiled PDF
└── public/             # Static assets and Plotly interactive charts
