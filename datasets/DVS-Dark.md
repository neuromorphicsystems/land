---
{
    "name": "DVS-Dark",
    "aliases": [],
    "year": 2020,
    "modalities": [
        "Vision"
    ],
    "sensors": [
        "DAVIS240"
    ],
    "other_sensors": [],
    "category": "Intensity Reconstruction, Optical Flow, and Frame Fusion",
    "tags": [
        "HDR Video Reconstruction"
    ],
    "description": "Seeing in the dark",
    "dataset_properties": {
        "available_online": false,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": false,
        "has_frames": true,
        "has_biases": false,
        "distribution_methods": [],
        "file_formats": [
            "Numpy"
        ],
        "availability_comment": "No direct links to the dataset. There is some example files in the Github repository. Note that the files are on the master branch, not the default main branch.",
        "dataset_links": []
    },
    "paper": {
        "title": "Learning to See in the Dark with Events",
        "doi": "10.1007/978-3-030-58523-5_39",
        "authors": [
            "Song Zhang",
            "Yu Zhang",
            "Zhe Jiang",
            "Dongqing Zou",
            "Jimmy Ren",
            "Bin Zhou"
        ],
        "abstract": "Imaging in the dark environment is important for many real-world applications like video surveillance. Recently, the development of Event Cameras raises promising directions in solving this task thanks to its High Dynamic Range (HDR) and low requirement of computational sources. However, such cameras record sparse, asynchronous intensity changes of the scene (called events), instead of canonical images. In this paper, we propose learning to see in the dark by translating HDR events in low light to canonical sharp images as if captured in day light. Since it is extremely challenging to collect paired event-image training data, a novel unsupervised domain adaptation network is proposed that explicitly separates domain-invariant features (e.g. scene structures) from the domain-specific ones (e.g. detailed textures) to ease representation learning. A detail enhancing branch is proposed to reconstruct day light-specific features from the domain-invariant representations in a residual manner, regularized by a ranking loss. To evaluate the proposed approach, a novel large-scale dataset is captured with a DAVIS240C camera with both day/low light events and intensity images. Experiments on this dataset show that the proposed domain adaptation approach achieves superior performance than various state-of-the-art architectures.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 37,
            "updated": "2025-07-08T06:58:45.865710"
        },
        {
            "source": "scholar",
            "count": 69,
            "updated": "2025-07-08T06:58:45.587092"
        }
    ],
    "links": [
        {
            "type": "paper",
            "url": "https://link.springer.com/chapter/10.1007/978-3-030-58523-5_39"
        },
        {
            "type": "github_page",
            "url": "https://github.com/zhangsongchn/DVS-Dark"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "stereo": false
    },
    "bibtex": {
        "pages": "666--682",
        "note": "Series Title: Lecture Notes in Computer Science",
        "doi": "10.1007/978-3-030-58523-5_39",
        "year": 2020,
        "editor": "Vedaldi, Andrea and Bischof, Horst and Brox, Thomas and Frahm, Jan-Michael",
        "author": "Zhang, Song and Zhang, Yu and Jiang, Zhe and Zou, Dongqing and Ren, Jimmy and Zhou, Bin",
        "publisher": "Springer International Publishing",
        "booktitle": "Computer {Vision} \u2013 {ECCV} 2020",
        "urldate": "2024-12-20",
        "language": "en",
        "url": "https://link.springer.com/10.1007/978-3-030-58523-5_39",
        "isbn": "978-3-030-58522-8 978-3-030-58523-5",
        "volume": "12363",
        "title": "Learning to {See} in the {Dark} with {Events}",
        "address": "Cham",
        "type": "incollection",
        "key": "vedaldi_learning_2020"
    },
    "referenced_papers": [
        {
            "doi": "10.1109/CVPR.2016.102",
            "source": "crossref"
        },
        {
            "doi": "10.1109/WACV.2016.7477561",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.18",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2014.2342715",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TIP.2018.2794218",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2019.00328",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00347",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00660",
            "source": "crossref"
        },
        {
            "doi": "10.1145/3072959.3073592",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-319-46493-0_36",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00145",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.632",
            "source": "crossref"
        },
        {
            "doi": "10.1145/3072959.3073609",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.01032",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.19",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2007.914337",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.patcog.2016.06.008",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00152",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11263-018-1106-2",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00473",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00398",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-20873-8_20",
            "source": "crossref"
        },
        {
            "doi": "10.1609/aaai.v30i1.10306",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2019.00154",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2015.463",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-11021-5_5",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-01216-8_8",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2017.244",
            "source": "crossref"
        }
    ]
}
---

### Dataset Structure
