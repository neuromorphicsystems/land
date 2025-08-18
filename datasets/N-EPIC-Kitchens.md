---
{
    "name": "N-EPIC-Kitchens",
    "aliases": [],
    "year": 2022,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "ESIM"
    ],
    "other_sensors": [],
    "category": "Human-centric Recordings",
    "subcategory": [
        "Human Action Recognition"
    ],
    "task": "Action Recognition",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": false,
        "has_simulated_data": true,
        "has_ground_truth": true,
        "has_frames": false,
        "has_biases": false,
        "distribution_methods": [
            "Direct Download"
        ],
        "file_formats": [
            "Numpy"
        ],
        "availability_comment": "Download scripts are provided that use rsync",
        "dataset_links": [
            {
                "name": "Direct Download",
                "url": "https://raw.githubusercontent.com/EgocentricVision/N-EPIC-Kitchens/main/download_data.sh",
                "format": "Numpy",
                "available": true
            }
        ],
        "size_gb": 1100.0,
        "size_type": "Uncompressed"
    },
    "paper": {
        "title": "E2(GO)MOTION -  Motion Augmented Event Stream for Egocentric Action Recognition",
        "doi": "10.1109/CVPR52688.2022.01931",
        "authors": [
            "Chiara Plizzari",
            "Mirco Planamente",
            "Gabriele Goletto",
            "Marco Cannici",
            "Emanuele Gusso",
            "Matteo Matteucci",
            "Barbara Caputo"
        ],
        "abstract": "Event cameras are novel bio-inspired sensors, which asynchronously capture pixel-level intensity changes in the form of \u201cevents\u201d. Due to their sensing mechanism, event cameras have little to no motion blur, a very high temporal resolution and require signi\ufb01cantly less power and memory than traditional frame-based cameras. These characteristics make them a perfect \ufb01t to several real-world applications such as egocentric action recognition on wearable devices, where fast camera motion and limited power challenge traditional vision sensors. However, the ever-growing \ufb01eld of event-based vision has, to date, overlooked the potential of event cameras in such applications. In this paper, we show that event data is a very valuable modality for egocentric action recognition. To do so, we introduce N-EPIC-Kitchens, the \ufb01rst event-based camera extension of the large-scale EPIC-Kitchens dataset. In this context, we propose two strategies: (i) directly processing eventcamera data with traditional video-processing architectures (E2(GO)) and (ii) using event-data to distill optical \ufb02ow information (E2(GO)MO). On our proposed benchmark, we show that event data provides a comparable performance to RGB and optical \ufb02ow, yet without any additional \ufb02ow computation at deploy time, and an improved performance of up to 4\\% with respect to RGB only information. The NEPIC-Kitchens dataset is available at https://github. com/EgocentricVision/N-EPIC-Kitchens.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 28,
            "updated": "2024-10-26 12:53:57.495786"
        },
        {
            "source": "scholar",
            "count": 72,
            "updated": "2025-06-15T09:14:45.897272"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2112.03596"
        },
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/document/9879783/"
        },
        {
            "type": "github_page",
            "url": "https://github.com/EgocentricVision/N-EPIC-Kitchens"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "source_dataset": "EPIC Kitchens",
        "conversion_method": "ESIM",
        "pov": "first person"
    },
    "bibtex": {
        "pages": "19903--19915",
        "year": 2022,
        "month": "jun",
        "author": "Plizzari, Chiara and Planamente, Mirco and Goletto, Gabriele and Cannici, Marco and Gusso, Emanuele and Matteucci, Matteo and Caputo, Barbara",
        "publisher": "IEEE",
        "booktitle": "2022 {IEEE}/{CVF} {Conference} on {Computer} {Vision} and {Pattern} {Recognition} ({CVPR})",
        "urldate": "2024-04-13",
        "language": "en",
        "doi": "10.1109/CVPR52688.2022.01931",
        "url": "https://ieeexplore.ieee.org/document/9879783/",
        "shorttitle": "E $^{\\textrm{2}}$ ({GO}){MOTION}",
        "isbn": "978-1-66546-946-3",
        "copyright": "https://doi.org/10.15223/policy-029",
        "title": "E $^{\\textrm{2}}$ ({GO}){MOTION}: {Motion} {Augmented} {Event} {Stream} for {Egocentric} {Action} {Recognition}",
        "address": "New Orleans, LA, USA",
        "type": "inproceedings",
        "key": "plizzari_e_2022"
    }
}
---

### Dataset Structure

- Contains the three datasets from the EPIC Kitchens-55 datasets (P01, P08, and P22)

- Converted using ESIM.

- The recordings are first person action recognition sequences.

- Source video was upscaled with Super SloMo (based on adaptive sampling strategy in v2e)

- The dataset provides both a download script and commands to download both the entire dataset and the component parts (i.e. only the raw events).

- More details can be found in the thesis available at \[PhD_Thesis_Chiara_conv_final.pdf#page=132.30\](file:///Users/gregorycohen/Downloads/PhD_Thesis_Chiara_conv_final.pdf#page=132.30)

### Citation

```bibtex
@article{plizzari20212,
  title={E $\^{} 2$(GO) MOTION: Motion Augmented Event Stream for Egocentric Action Recognition},
  author={Plizzari, Chiara and Planamente, Mirco and Goletto, Gabriele and Cannici, Marco and Gusso, Emanuele and Matteucci, Matteo and Caputo, Barbara},
  journal={arXiv preprint arXiv:2112.03596},
  year={2021}
}
```
