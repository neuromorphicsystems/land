---
{
    "name": "HQF",
    "aliases": [],
    "year": 2020,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "DAVIS240"
    ],
    "other_sensors": [],
    "category": "Benchmarking, SNN Training Task, and SNN Training",
    "subcategory": [
        "Frame Reconstruction",
        "Video Interpolation",
        "Optical Flow"
    ],
    "task": "Simulator Development",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": false,
        "has_frames": true,
        "has_biases": true,
        "distribution_methods": [
            "Google Drive"
        ],
        "file_formats": [
            "ROSbag"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "Google Drive",
                "url": "https://drive.google.com/drive/folders/18Xdr6pxJX0ZXTrXW9tK0hC3ZpmKDIt6_",
                "format": "ROSbag",
                "available": true
            }
        ],
        "size_gb": 2.7,
        "size_type": "Uncompressed"
    },
    "paper": {
        "title": "Reducing the Sim-to-Real Gap for Event Cameras",
        "doi": "10.1007/978-3-030-58583-9_32",
        "authors": [
            "Timo Stoffregen",
            "Cedric Scheerlinck",
            "Davide Scaramuzza",
            "Tom Drummond",
            "Nick Barnes",
            "Lindsay Kleeman",
            "Robert Mahony"
        ],
        "abstract": "Event cameras are paradigm-shifting novel sensors that report asynchronous, per-pixel brightness changes called \u2018events\u2019 with unparalleled low latency. This makes them ideal for high speed, high dynamic range scenes where conventional cameras would fail. Recent work has demonstrated impressive results using Convolutional Neural Networks (CNNs) for video reconstruction and optic \ufb02ow with events. We present strategies for improving training data for event based CNNs that result in 20-40 \\% boost in performance of existing state-of-the-art (SOTA) video reconstruction networks retrained with our method, and up to 15 \\% for optic \ufb02ow networks. A challenge in evaluating event based video reconstruction is lack of quality ground truth images in existing datasets. To address this, we present a new High Quality Frames (HQF) dataset, containing events and ground truth frames from a DAVIS240C that are well-exposed and minimally motion-blurred. We evaluate our method on HQF + several existing major event camera datasets.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 100,
            "updated": "2025-07-14T09:34:41.652372"
        },
        {
            "source": "scholar",
            "count": 220,
            "updated": "2025-07-14T09:34:41.380151"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2003.09078"
        },
        {
            "type": "paper",
            "url": "https://dl.acm.org/doi/10.1007/978-3-030-58583-9_32"
        },
        {
            "type": "project_page",
            "url": "https://timostoff.github.io/20ecnn"
        }
    ],
    "full_name": "High Quality Frames (HQF)",
    "additional_metadata": {
        "stereo": false
    },
    "bibtex": {
        "pages": "534--549",
        "note": "Series Title: Lecture Notes in Computer Science",
        "doi": "10.1007/978-3-030-58583-9_32",
        "year": 2020,
        "editor": "Vedaldi, Andrea and Bischof, Horst and Brox, Thomas and Frahm, Jan-Michael",
        "author": "Stoffregen, Timo and Scheerlinck, Cedric and Scaramuzza, Davide and Drummond, Tom and Barnes, Nick and Kleeman, Lindsay and Mahony, Robert",
        "publisher": "Springer International Publishing",
        "booktitle": "Computer {Vision} \u2013 {ECCV} 2020",
        "urldate": "2024-12-15",
        "language": "en",
        "url": "https://link.springer.com/10.1007/978-3-030-58583-9_32",
        "isbn": "978-3-030-58582-2 978-3-030-58583-9",
        "volume": "12372",
        "title": "Reducing the {Sim}-to-{Real} {Gap} for {Event} {Cameras}",
        "address": "Cham",
        "type": "incollection",
        "key": "vedaldi_reducing_2020"
    },
    "referenced_papers": [
        {
            "doi": "10.1109/CVPR.2016.102",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TNNLS.2013.2273537",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.neunet.2011.11.001",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2014.2342715",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2015.00137",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2015.316",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.01256",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00407",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2016.2647639",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2019.00573",
            "source": "crossref"
        },
        {
            "doi": "10.5244/C.28.26",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-319-46466-4_21",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-01267-0_11",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2007.914337",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-319-10602-1_48",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISCAS.2017.8050295",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00568",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA.2015.7139876",
            "source": "crossref"
        },
        {
            "doi": "10.1177/0278364917691115",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2015.2392947",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2013.71",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00398",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2019.2963386",
            "source": "crossref"
        },
        {
            "doi": "10.5244/C.30.9",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-20873-8_20",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2019.2893427",
            "source": "crossref"
        },
        {
            "doi": "10.1109/WACV45572.2020.9093366",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW.2019.00215",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00186",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2019.00734",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.01258",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TIP.2003.819861",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS45743.2020.9341224",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00662",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00068",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2018.2800793",
            "source": "crossref"
        },
        {
            "doi": "10.15607/RSS.2018.XIV.062",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00108",
            "source": "crossref"
        }
    ]
}
---


### Dataset Structure