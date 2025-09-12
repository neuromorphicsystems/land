---
{
    "name": "DAVIS-RS-EVENT",
    "aliases": [
        "DRE"
    ],
    "year": 2025,
    "modalities": [
        "Vision"
    ],
    "sensors": [
        "DAVIS346"
    ],
    "other_sensors": [],
    "category": "Intensity Reconstruction, Optical Flow, and Frame Fusion",
    "tags": [
        "Shutter Unrolling"
    ],
    "description": "Event-based Shutter Unrolling Dataset",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": false,
        "has_frames": true,
        "has_biases": false,
        "distribution_methods": [
            "Google Drive"
        ],
        "file_formats": [
            "HDF5"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "Google Drive",
                "url": "https://drive.google.com/drive/folders/1GhUP-dJIQbutI3uipeuGPMJmfA2u-ACR",
                "format": "HDF5",
                "available": true
            }
        ],
        "size_gb": 9.5,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "Self-supervised Shutter Unrolling with Events",
        "doi": "10.1007/s11263-025-02364-z",
        "authors": [
            "Mingyuan Lin",
            "Yangguang Wang",
            "Xiang Zhang",
            "Boxin Shi",
            "Wen Yang",
            "Chu He",
            "Gui-song Xia",
            "Lei Yu"
        ],
        "abstract": "Continuous-time Global Shutter Video Recovery (CGVR) faces a substantial challenge in recovering undistorted high frame-rate Global Shutter (GS) videos from distorted Rolling Shutter (RS) images. This problem is severely ill-posed due to the absence of temporal dynamic information within RS intra-frame scanlines and inter-frame exposures, particularly when prior knowledge about camera/object motions is unavailable. Commonly used artificial assumptions on scenes/motions and data-specific characteristics are prone to producing sub-optimal solutions in real-world scenarios. To address this challenge, we propose an event-based CGVR network within a self-supervised learning paradigm, i.e., SelfUnroll, and leverage the extremely high temporal resolution of event cameras to provide accurate inter/intra-frame dynamic information. Specifically, an Event-based Inter/intra-frame Compensator (E-IC) is proposed to predict the per-pixel dynamic between arbitrary time intervals, including the temporal transition and spatial translation. Exploring connections in terms of RS-RS, RS-GS, and GS-RS, we explicitly formulate mutual constraints with the proposed E-IC, resulting in supervisions without ground-truth GS images. Extensive evaluations over synthetic and real datasets demonstrate that the proposed method achieves state-of-the-art methods and shows remarkable performance for event-based RS2GS inversion in real-world scenarios. The dataset and code are available at https://w3un.github.io/selfunroll/.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 0,
            "updated": "2025-09-12T16:25:21.707888"
        },
        {
            "source": "scholar",
            "count": 1,
            "updated": "2025-09-12T16:25:23.257051"
        }
    ],
    "links": [
        {
            "type": "project_page",
            "url": "https://w3un.github.io/selfunroll/"
        },
        {
            "type": "github_page",
            "url": "https://github.com/w3un/selfunroll_code"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "num_recordings": "100"
    },
    "referenced_papers": [
        {
            "doi": "10.1109/CVPR42600.2020.00258",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2010.5539932",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00382",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2019.2941941",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2014.2342715",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV51070.2023.01148",
            "source": "crossref"
        },
        {
            "doi": "10.36227/techrxiv.21300960.v1",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52729.2023.01336",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.00419",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.00450",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.01705",
            "source": "crossref"
        },
        {
            "doi": "10.1145/358669.358692",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCPhot.2012.6215213",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.01728",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00938",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00830",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00504",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52729.2023.00406",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2007.914337",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-58598-3_41",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00598",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2017.478",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.244",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2017.37",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-031-72952-2_10",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2013.179",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00698",
            "source": "crossref"
        },
        {
            "doi": "10.1109/WACV.2018.00104",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2017.101",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2019.00098",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2016.303",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.252",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-319-24574-4_28",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2016.445",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.01584",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00931",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.01589",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.01723",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-58601-0_10",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.00258",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-031-20071-7_5",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.01724",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.cviu.2024.104094",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.00910",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-031-20071-7_14",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.01725",
            "source": "crossref"
        },
        {
            "doi": "10.15607/RSS.2018.XIV.062",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2017.244",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2017.108",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00468",
            "source": "crossref"
        }
    ],
    "bibtex": {
        "pages": "3762\u20133780",
        "month": "jan",
        "year": 2025,
        "author": "Lin, Mingyuan and Wang, Yangguang and Zhang, Xiang and Shi, Boxin and Yang, Wen and He, Chu and Xia, Gui-song and Yu, Lei",
        "publisher": "Springer Science and Business Media LLC",
        "journal": "International Journal of Computer Vision",
        "number": "6",
        "doi": "10.1007/s11263-025-02364-z",
        "url": "http://dx.doi.org/10.1007/s11263-025-02364-z",
        "issn": "1573-1405",
        "volume": "133",
        "title": "Self-supervised Shutter Unrolling with Events",
        "type": "article",
        "key": "Lin_2025"
    }
}
---

# Dataset Details