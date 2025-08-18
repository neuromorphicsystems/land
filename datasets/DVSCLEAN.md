---
{
    "name": "DVSCLEAN",
    "aliases": [],
    "year": 2022,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "ESIM",
        "CeleX-V"
    ],
    "other_sensors": [],
    "category": "Filtering and De-noising",
    "subcategory": [
        "De-noising"
    ],
    "task": "SNN Training",
    "dataset_properties": {
        "available_online": false,
        "has_real_data": true,
        "has_simulated_data": true,
        "has_ground_truth": false,
        "has_frames": true,
        "has_biases": false,
        "distribution_methods": [
            "Google Drive"
        ],
        "file_formats": [
            "Numpy"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "Google Drive",
                "url": "https://drive.google.com/file/d/14FJD-kf9NA-bdWVWHK35ewLiLVdBnNSq/view",
                "format": "Numpy",
                "available": false
            }
        ],
        "size_gb": 51.0,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "AEDNet: Asynchronous Event Denoising with Spatial-Temporal Correlation among Irregular Data",
        "doi": "10.1145/3503161.3548048",
        "authors": [
            "Huachen Fang",
            "Jinjian Wu",
            "Leida Li",
            "Junhui Hou",
            "Weisheng Dong",
            "Guangming Shi"
        ],
        "abstract": "Dynamic Vision Sensor (DVS) is a compelling neuromorphic camera compared to conventional camera, but it suffers from fiercer noise. Due to the nature of irregular format and asynchronous readout, DVS data is always transformed into a regular tensor (e.g., 3D voxel or image) for deep learning method, which corrupts its own asynchronous properties. To maintain asynchronous, we establish an innovative asynchronous event denoise neural network, named AEDNet, which directly consumes the correlation of the irregular signal in spatial-temporal range without destroying its original structural property. Based on the property of continuation in temporal domain and discreteness in spatial domain, we decompose the DVS signal into two parts, i.e., temporal correlation and spatial affinity, and separately process these two parts. Our spatial feature embedding unit is a unique feature extraction module that extracts feature from event-level, which perfectly maintains its spatial-temporal correlation. To test effectiveness, we build a novel dataset named DVSCLEAN containing both simulated and real-world data. The experimental results of AEDNet achieve SOTA",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 12,
            "updated": "2025-07-14T07:51:46.956767"
        },
        {
            "source": "scholar",
            "count": 27,
            "updated": "2025-07-14T07:51:46.547944"
        }
    ],
    "links": [
        {
            "type": "paper",
            "url": "https://dl.acm.org/doi/10.1145/3503161.3548048"
        },
        {
            "type": "github_page",
            "url": "https://github.com/Fanghuachen/AEDNet"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "sensor_resolution": "1280x800"
    },
    "bibtex": {
        "pages": "1427--1435",
        "year": 2022,
        "month": "oct",
        "author": "Fang, Huachen and Wu, Jinjian and Li, Leida and Hou, Junhui and Dong, Weisheng and Shi, Guangming",
        "publisher": "ACM",
        "booktitle": "Proceedings of the 30th {ACM} {International} {Conference} on {Multimedia}",
        "urldate": "2024-04-13",
        "language": "en",
        "doi": "10.1145/3503161.3548048",
        "url": "https://dl.acm.org/doi/10.1145/3503161.3548048",
        "shorttitle": "{AEDNet}",
        "isbn": "978-1-4503-9203-7",
        "title": "{AEDNet}: {Asynchronous} {Event} {Denoising} with {Spatial}-{Temporal} {Correlation} among {Irregular} {Data}",
        "address": "Lisboa Portugal",
        "type": "inproceedings",
        "key": "fang_aednet_2022"
    },
    "referenced_papers": [
        {
            "doi": "10.1109/CVPR42600.2020.00177",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-27272-2_35",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TNNLS.2013.2273537",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2014.2342715",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2015.2392947",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.eng.2022.01.012",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TETC.2017.2788865",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TNNLS.2014.2308551",
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
            "doi": "10.1109/JPROC.2014.2346763",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA40945.2020.9196877",
            "source": "crossref"
        },
        {
            "title": "Less Data Same Information for Event-Based Sensors",
            "source": "crossref"
        },
        {
            "title": "Event-based Vision: A Survey",
            "source": "crossref"
        },
        {
            "title": "Probabilistic Undirected Graph Based Denoising Method for Dynamic Vision Sensor",
            "source": "crossref"
        },
        {
            "title": "On event-based optical flow detection",
            "source": "crossref"
        }
    ]
}
---

### Dataset Structure

- The dataset contains both real data from a Celex-V sensor (1280x800 pixels) and simulated data.
-
