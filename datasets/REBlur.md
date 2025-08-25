---
{
    "name": "REBlur",
    "aliases": [],
    "year": 2022,
    "modalities": [
        "Vision"
    ],
    "sensors": [
        "DAVIS346"
    ],
    "other_sensors": [],
    "category": "Intensity Reconstruction, Optical Flow, and Frame Fusion",
    "tags": [
        "De-blurring"
    ],
    "description": "Frame/Event fusion (Motion Deblurring)",
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
            "HDF5"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "Direct Download",
                "url": "https://data.vision.ee.ethz.ch/csakarid/shared/EFNet/REBlur.zip",
                "format": "HDF5",
                "available": true
            }
        ],
        "size_gb": 0.624,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "Event-Based Fusion for Motion Deblurring with Cross-modal Attention",
        "doi": "10.1007/978-3-031-19797-0_24",
        "authors": [
            "Lei Sun",
            "Christos Sakaridis",
            "Jingyun Liang",
            "Qi Jiang",
            "Kailun Yang",
            "Peng Sun",
            "Yaozu Ye",
            "Kaiwei Wang",
            "Luc Van Gool"
        ],
        "abstract": "Traditional frame-based cameras inevitably suffer from motion blur due to long exposure times. As a kind of bio-inspired camera, the event camera records the intensity changes in an asynchronous way with high temporal resolution, providing valid image degradation information within the exposure time. In this paper, we rethink the eventbased image deblurring problem and unfold it into an end-to-end twostage image restoration network. To effectively fuse event and image features, we design an event-image cross-modal attention module applied at multiple levels of our network, which allows to focus on relevant features from the event branch and filter out noise. We also introduce a novel symmetric cumulative event representation specifically for image deblurring as well as an event mask gated connection between the two stages of our network which helps avoid information loss. At the dataset level, to foster event-based motion deblurring and to facilitate evaluation on challenging real-world images, we introduce the Real Event Blur (REBlur) dataset, captured with an event camera in an illuminationcontrolled optical laboratory. Our Event Fusion Network (EFNet) sets the new state of the art in motion deblurring, surpassing both the prior best-performing image-based method and all event-based methods with public implementations on the GoPro dataset (by up to 2.47dB) and on our REBlur dataset, even in extreme blurry conditions. The code and our REBlur dataset will be made publicly available.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 97,
            "updated": "2025-07-08 07:26:22.288625"
        },
        {
            "source": "scholar",
            "count": 191,
            "updated": "2025-07-08T07:28:02.961774"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://www.ecva.net/papers/eccv_2022/papers_ECCV/papers/136780403.pdf"
        },
        {
            "type": "paper",
            "url": "https://link.springer.com/chapter/10.1007/978-3-031-19797-0_24"
        },
        {
            "type": "github_page",
            "url": "https://github.com/AHupuJR/EFNet"
        }
    ],
    "full_name": "Real Event Blur(REBlur)",
    "additional_metadata": {
        "stereo": false
    },
    "bibtex": {
        "pages": "412--428",
        "keywords": "Computer Science - Computer Vision and Pattern Recognition",
        "note": "arXiv:2112.00167 [cs]",
        "doi": "10.1007/978-3-031-19797-0_24",
        "year": 2022,
        "author": "Sun, Lei and Sakaridis, Christos and Liang, Jingyun and Jiang, Qi and Yang, Kailun and Sun, Peng and Ye, Yaozu and Wang, Kaiwei and Van Gool, Luc",
        "urldate": "2024-04-13",
        "language": "en",
        "url": "http://arxiv.org/abs/2112.00167",
        "volume": "13678",
        "title": "Event-{Based} {Fusion} for {Motion} {Deblurring} with {Cross}-modal {Attention}",
        "type": "incollection",
        "key": "sun_event-based_2022"
    }
}
---

### Dataset Structure
