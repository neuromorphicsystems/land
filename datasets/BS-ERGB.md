---
{
    "name": "BS-ERGB",
    "aliases": [],
    "year": 2022,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "Prophesee Gen4"
    ],
    "other_sensors": [
        "FLIR 4096\u00d72196 RGB"
    ],
    "category": "Intensity Reconstruction, Optical Flow, and Frame Fusion",
    "subcategory": [
        "High-Speed Video Reconstruction"
    ],
    "task": "Video frame interpolation",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": false,
        "has_frames": true,
        "has_biases": false,
        "distribution_methods": [
            "Direct Download"
        ],
        "file_formats": [
            "Numpy"
        ],
        "availability_comment": "Form submission required to access dataset",
        "dataset_links": [
            {
                "name": "Direct Download",
                "url": "https://rpg.ifi.uzh.ch/data/timelens_pp/bs_ergb.zip",
                "format": "Numpy",
                "available": true
            }
        ],
        "size_gb": 43.0,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "Time Lens++ -  Event-based Frame Interpolation with Parametric Nonlinear Flow and Multi-scale Fusion",
        "doi": "10.1109/CVPR52688.2022.01723",
        "authors": [
            "Stepan Tulyakov",
            "Alfredo Bochicchio",
            "Daniel Gehrig",
            "Stamatios Georgoulis",
            "Yuanyou Li",
            "Davide Scaramuzza"
        ],
        "abstract": "Recently, video frame interpolation using a combination of frame- and event-based cameras has surpassed traditional image-based methods both in terms of performance and memory efficiency. However, current methods still suffer from (i) brittle image-level fusion of complementary interpolation results, that fails in the presence of artifacts in the fused image, (ii) potentially temporally inconsistent and inefficient motion estimation procedures, that run for every inserted frame and (iii) low contrast regions that do not trigger events, and thus cause events-only motion estimation to generate artifacts. Moreover, previous methods were only tested on datasets consisting of planar and far-away scenes, which do not capture the full complexity of the real world. In this work, we address the above problems by introducing multi-scale feature-level fusion and computing one-shot non-linear inter-frame motion-which can be efficiently sampled for image warping-from events and images. We also collect the first large-scale events and frames dataset consisting of more than 100 challenging scenes with depth variations, captured with a new experimental setup based on a beamsplitter. We show that our method improves the reconstruction quality by up to 0.2 dB in terms of PSNR and up to 15\\% in LPIPS score.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 55,
            "updated": "2024-10-26 12:54:43.030246"
        },
        {
            "source": "scholar",
            "count": 159,
            "updated": "2025-06-15T09:59:33.628403"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2203.17191"
        },
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/document/9880460"
        },
        {
            "type": "github_page",
            "url": "https://github.com/uzh-rpg/timelens-pp/"
        }
    ],
    "full_name": "Beam Splitter Events & RGB (BS-ERGB)",
    "additional_metadata": {
        "stereo": false
    },
    "bibtex": {
        "pages": "17734--17743",
        "year": 2022,
        "month": "jun",
        "author": "Tulyakov, Stepan and Bochicchio, Alfredo and Gehrig, Daniel and Georgoulis, Stamatios and Li, Yuanyou and Scaramuzza, Davide",
        "publisher": "IEEE",
        "booktitle": "2022 {IEEE}/{CVF} {Conference} on {Computer} {Vision} and {Pattern} {Recognition} ({CVPR})",
        "urldate": "2023-11-12",
        "language": "en",
        "doi": "10.1109/CVPR52688.2022.01723",
        "url": "https://ieeexplore.ieee.org/document/9880460/",
        "shorttitle": "Time {Lens}++",
        "isbn": "978-1-66546-946-3",
        "title": "Time {Lens}++: {Event}-based {Frame} {Interpolation} with {Parametric} {Nonlinear} {Flow} and {Multi}-scale {Fusion}",
        "address": "New Orleans, LA, USA",
        "type": "inproceedings",
        "key": "tulyakov_time_2022"
    }
}
---

### Dataset Structure
