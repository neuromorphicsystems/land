---
{
    "name": "RGBlurE",
    "aliases": [
        "RGBlur+E-HS",
        "RGBlur+ELS"
    ],
    "year": 2023,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "Prophesee Gen4"
    ],
    "other_sensors": [
        "FLIRBlackFly S RGB GS"
    ],
    "category": "Filtering and De-noising",
    "subcategory": [
        "Beamsplitters",
        "De-blurring"
    ],
    "task": "Non-uniform image deblurring",
    "dataset_properties": {
        "available_online": false,
        "has_real_data": true,
        "has_simulated_data": true,
        "has_ground_truth": false,
        "has_frames": false,
        "has_biases": false,
        "distribution_methods": [],
        "file_formats": [
            "Numpy"
        ],
        "availability_comment": "No dataset link in the paper or the Github repository",
        "dataset_links": []
    },
    "paper": {
        "title": "Event-Based Image Deblurring with Dynamic Motion Awareness",
        "doi": "10.1007/978-3-031-25072-9_7",
        "authors": [
            "Patricia Vitoria",
            "Stamatios Georgoulis",
            "Stepan Tulyakov",
            "Alfredo Bochicchio",
            "Julius Erbach",
            "Yuanyou Li"
        ],
        "abstract": "Non-uniform image deblurring is a challenging task due to the lack of temporal and textural information in the blurry image itself. Complementary information from auxiliary sensors such event sensors are being explored to address these limitations. The latter can record changes in a logarithmic intensity asynchronously, called events, with high temporal resolution and high dynamic range. Current event-based deblurring methods combine the blurry image with events to jointly estimate per-pixel motion and the deblur operator. In this paper, we argue that a divide-and-conquer approach is more suitable for this task. To this end, we propose to use modulated deformable convolutions, whose kernel offsets and modulation masks are dynamically estimated from events to encode the motion in the scene, while the deblur operator is learned from the combination of blurry image and corresponding events. Furthermore, we employ a coarse-to-fine multi-scale reconstruction approach to cope with the inherent sparsity of events in low contrast regions. Importantly, we introduce the first dataset containing pairs of real RGB blur images and related events during the exposure time. Our results show better overall robustness when using events, with improvements in PSNR by up to 1.57dB on synthetic data and 1.08 dB on real event data.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 13,
            "updated": "2025-06-14 00:14:13.105893"
        },
        {
            "source": "scholar",
            "count": 25,
            "updated": "2025-06-22T13:00:35.465010"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/pdf/2208.11398"
        },
        {
            "type": "paper",
            "url": "https://link.springer.com/chapter/10.1007/978-3-031-25072-9_7"
        },
        {
            "type": "github_page",
            "url": "https://github.com/pvitoria/zrc_event_based_deblurring"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "synchronisation_type": "hardware",
        "stereo": false
    },
    "bibtex": {
        "pages": "95\u2013112",
        "year": 2023,
        "author": "Vitoria, Patricia and Georgoulis, Stamatios and Tulyakov, Stepan and Bochicchio, Alfredo and Erbach, Julius and Li, Yuanyou",
        "publisher": "Springer Nature Switzerland",
        "booktitle": "Computer Vision \u2013 ECCV 2022 Workshops",
        "doi": "10.1007/978-3-031-25072-9_7",
        "url": "http://dx.doi.org/10.1007/978-3-031-25072-9_7",
        "issn": "1611-3349",
        "isbn": "9783031250729",
        "title": "Event-Based Image Deblurring with Dynamic Motion Awareness",
        "type": "book",
        "key": "Vitoria_2023"
    }
}
---


### Dataset Structure 

- Cameras synchronised using hardware
- Consists of two sub-datasets RGBlur+E-HS and RGBlur+ELS.

RGBlur+E-HS contains 32 sequences, split into 18 for training and 14 for testing.

RGBlur+E-LS, contains 29 sequences recorded at 28 fps. For this subset, there is no ground truth data available.