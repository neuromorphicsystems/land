---
{
    "name": "LED",
    "aliases": [],
    "year": 2024,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "Prophesee Gen4"
    ],
    "other_sensors": [],
    "category": "Filtering and De-noising",
    "subcategory": [
        "De-noising",
        "Beamsplitters"
    ],
    "task": "Denoising Technique",
    "dataset_properties": {
        "available_online": false,
        "has_real_data": false,
        "has_simulated_data": false,
        "has_ground_truth": false,
        "has_frames": false,
        "has_biases": false,
        "distribution_methods": [],
        "file_formats": [],
        "availability_comment": "No dataset link provided. Github repository is currently empty.",
        "dataset_links": []
    },
    "paper": {
        "title": "LED: A Large-scale Real-world Paired Dataset for Event Camera Denoising",
        "doi": "10.1109/CVPR52733.2024.02422",
        "authors": [
            "Yuxing Duan"
        ],
        "abstract": "Event camera has significant advantages in capturing dynamic scene information while being prone to noise in-terference, particularly in challenging conditions like low threshold and low illumination. However, most existing research focuses on gentle situations, hindering event camera applications in realistic complex scenarios. To tackle this limitation and advance the field, we construct a new paired real-world event denoising dataset (LED), including 3K sequences with 18K seconds of high-resolution (1200*680) event streams and showing three notable distinctions compared to others: diverse noise levels and scenes, larger-scale with high-resolution, and high-quality GT. Specifically, it contains stepped parameters and varying illumination with diverse scenarios. Moreover, based on the property of noise events inconsistency and signal events consistency, we propose a novel effective denoising frame-work(DED) using homogeneous dual events to generate the GT with better separating noise from the raw. Further-more, we design a bio-inspired baseline leveraging Leaky-Integrate-and-Fire (LIF) neurons with dynamic thresholds to realize accurate denoising. The experimental results demonstrate that the remarkable performance of the proposed approach on different datasets. The dataset and code are at https://github.com/Yee-Sing/led.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 6,
            "updated": "2025-06-30T13:09:54.936011"
        },
        {
            "source": "scholar",
            "count": 13,
            "updated": "2025-06-30T13:09:54.524393"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2405.19718"
        },
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/document/10655931"
        },
        {
            "type": "github_page",
            "url": "https://github.com/Yee-Sing/led"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "stereo": false
    },
    "bibtex": {
        "pages": "25637--25647",
        "year": 2024,
        "month": "jun",
        "author": "Duan, Yuxing",
        "publisher": "IEEE",
        "booktitle": "2024 {IEEE}/{CVF} {Conference} on {Computer} {Vision} and {Pattern} {Recognition} ({CVPR})",
        "urldate": "2024-12-15",
        "language": "en",
        "doi": "10.1109/CVPR52733.2024.02422",
        "url": "https://ieeexplore.ieee.org/document/10655931/",
        "shorttitle": "{LED}",
        "isbn": "9798350353006",
        "copyright": "https://doi.org/10.15223/policy-029",
        "title": "{LED}: {A} {Large}-scale {Real}-world {Paired} {Dataset} for {Event} {Camera} {Denoising}",
        "address": "Seattle, WA, USA",
        "type": "inproceedings",
        "key": "duan_led_2024"
    },
    "referenced_papers": [
        {
            "doi": "10.1109/TNNLS.2022.3201830",
            "source": "crossref"
        },
        {
            "doi": "10.1109/cvpr42600.2020.00177",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TNNLS.2013.2273537",
            "source": "crossref"
        },
        {
            "doi": "10.1038/s41566-023-01308-8",
            "source": "crossref"
        },
        {
            "doi": "10.1609/aaai.v34i07.6625",
            "source": "crossref"
        },
        {
            "doi": "10.1609/aaai.v36i1.19906",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2021.3113344",
            "source": "crossref"
        },
        {
            "doi": "10.1109/cvpr46437.2021.01263",
            "source": "crossref"
        },
        {
            "doi": "10.1126/scirobotics.aaz9712",
            "source": "crossref"
        },
        {
            "doi": "10.1145/3503161.3548048",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.00266",
            "source": "crossref"
        },
        {
            "doi": "10.1126/sciadv.adi1480",
            "source": "crossref"
        },
        {
            "doi": "10.3390/app10062024",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00407",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00364",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2021.3068942",
            "source": "crossref"
        },
        {
            "doi": "10.1017/CBO9781107447615",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2022.3152999",
            "source": "crossref"
        },
        {
            "doi": "10.1145/2980179.2980254",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW53098.2021.00144",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.01454",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TETC.2017.2788865",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00223",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2016.2574707",
            "source": "crossref"
        },
        {
            "doi": "10.1145/3355089.3356508",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2007.914337",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISCAS.2015.7168735",
            "source": "crossref"
        },
        {
            "doi": "10.1145/2661229.2661277",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.01711",
            "source": "crossref"
        },
        {
            "doi": "10.1038/s41565-022-01291-1",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00265",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LSP.2012.2227726",
            "source": "crossref"
        },
        {
            "doi": "10.1109/tpami.2020.3036667",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2019.2963386",
            "source": "crossref"
        },
        {
            "doi": "10.1109/cvpr.2019.01258",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2019.00734",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00652",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00283",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TMM.2020.2993957",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.01006",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.00860",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TCI.2023.3281202",
            "source": "crossref"
        },
        {
            "doi": "10.1109/cvpr46437.2021.01401",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.00358",
            "source": "crossref"
        },
        {
            "title": "Biologically inspired dynamic thresholds for spiking neural networks",
            "source": "crossref"
        },
        {
            "title": "E-mlb: Multilevel bench-mark for event-based camera denoising",
            "source": "crossref"
        },
        {
            "title": "Noise2noise: Learning image restoration without clean data",
            "source": "crossref"
        },
        {
            "title": "Learning to detect objects with a 1 megapixel event camera",
            "source": "crossref"
        },
        {
            "title": "Esim: an open event camera simulator",
            "source": "crossref"
        },
        {
            "title": "Cadence Design Systems",
            "source": "crossref"
        },
        {
            "title": "Ltmd: Learning improvement of spiking neural networks with learnable thresholding neurons and moderate dropout",
            "source": "crossref"
        },
        {
            "title": "Joint filtering of in-tensity images and neuromorphic events for high-resolution noise-robust imaging",
            "source": "crossref"
        }
    ]
}
---


### Dataset Structure