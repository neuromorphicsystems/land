---
{
    "name": "Bardow2016",
    "aliases": [],
    "year": 2016,
    "modalities": [
        "Vision"
    ],
    "sensors": [
        "DVS128"
    ],
    "other_sensors": [],
    "category": "Intensity Reconstruction, Optical Flow, and Frame Fusion",
    "tags": [
        "Optical Flow"
    ],
    "description": "Optical flow and intensity reconstruction",
    "dataset_properties": {
        "available_online": false,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": false,
        "has_frames": false,
        "has_biases": true,
        "distribution_methods": [
            "Direct Download"
        ],
        "file_formats": [
            "Binary"
        ],
        "availability_comment": "Download links no longer work",
        "dataset_links": [
            {
                "name": "Direct Download",
                "url": "https://wp.doc.ic.ac.uk/pb2114/datasets/",
                "format": "Binary",
                "available": false
            }
        ]
    },
    "paper": {
        "title": "Simultaneous Optical Flow and Intensity Estimation from an Event Camera",
        "doi": "10.1109/CVPR.2016.102",
        "authors": [
            "Patrick Bardow",
            "Andrew J. Davison",
            "Stefan Leutenegger"
        ],
        "abstract": "Event cameras are bio-inspired vision sensors which mimic retinas to measure per-pixel intensity change rather than outputting an actual intensity image. This proposed paradigm shift away from traditional frame cameras offers signi\ufb01cant potential advantages: namely avoiding high data rates, dynamic range limitations and motion blur. Unfortunately, however, established computer vision algorithms may not at all be applied directly to event cameras. Methods proposed so far to reconstruct images, estimate optical \ufb02ow, track a camera and reconstruct a scene come with severe restrictions on the environment or on the motion of the camera, e.g. allowing only rotation. Here, we propose, to the best of our knowledge, the \ufb01rst algorithm to simultaneously recover the motion \ufb01eld and brightness image, while the camera undergoes a generic motion through any scene. Our approach employs minimisation of a cost function that contains the asynchronous event data as well as spatial and temporal regularisation within a sliding window time interval. Our implementation relies on GPU optimisation and runs in near real-time. In a series of examples, we demonstrate the successful operation of our framework, including in situations where conventional cameras suffer from dynamic range limitations and motion blur.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 216,
            "updated": "2025-07-14T07:46:34.208705"
        },
        {
            "source": "scholar",
            "count": 386,
            "updated": "2025-07-14T07:46:33.805258"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://openaccess.thecvf.com/content_cvpr_2016/papers/Bardow_Simultaneous_Optical_Flow_CVPR_2016_paper.pdf"
        },
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/document/7780471"
        },
        {
            "type": "project_page",
            "url": "http://wp.doc.ic.ac.uk/pb2114/datasets/"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "num_recordings": "4"
    },
    "bibtex": {
        "pages": "884--892",
        "year": 2016,
        "month": "jun",
        "author": "Bardow, Patrick and Davison, Andrew J. and Leutenegger, Stefan",
        "publisher": "IEEE",
        "booktitle": "2016 {IEEE} {Conference} on {Computer} {Vision} and {Pattern} {Recognition} ({CVPR})",
        "urldate": "2023-09-05",
        "language": "en",
        "doi": "10.1109/CVPR.2016.102",
        "url": "http://ieeexplore.ieee.org/document/7780471/",
        "isbn": "978-1-4673-8851-1",
        "title": "Simultaneous {Optical} {Flow} and {Intensity} {Estimation} from an {Event} {Camera}",
        "address": "Las Vegas, NV, USA",
        "type": "inproceedings",
        "key": "bardow_simultaneous_2016"
    },
    "referenced_papers": [
        {
            "doi": "10.1016/0004-3702(81)90024-2",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2007.914337",
            "source": "crossref"
        },
        {
            "doi": "10.1038/scientificamerican0591-76",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS.2014.6942940",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2011.6126513",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2011.6126441",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2009.5206604",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2010.2085952",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s10851-010-0251-1",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA.2014.6906931",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IJCNN.2011.6033299",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISCAS.2009.5117867",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISCAS.2007.378038",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2014.2342715",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TNNLS.2013.2273537",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2013.168",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-642-15986-2_32",
            "source": "crossref"
        },
        {
            "doi": "10.1016/0167-2789(92)90242-F",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-642-03061-1_2",
            "source": "crossref"
        },
        {
            "title": "Applications of the Legendre-Fenchel transformation to computer vision problems",
            "source": "crossref"
        },
        {
            "title": "Simultaneous Mosaicing and Tracking with an Event Camera",
            "source": "crossref"
        },
        {
            "title": "LSD-SLAM: Large-scale direct monocular SLAM",
            "source": "crossref"
        },
        {
            "title": "Natural image statistics for computer graphics",
            "source": "crossref"
        },
        {
            "title": "A duality based approach for realtime TV-L1 optical flow",
            "source": "crossref"
        },
        {
            "title": "An Improved Algorithm for TV-L1 Optical Flow",
            "source": "crossref"
        }
    ]
}
---

### Dataset Structure

The dataset consists of 4 recordings. Each file is stored in a binary file with a specified structure, in which each event is encoded into 8 bytes.

### Format

The events are sequentially stored in a binary file. Each event is encoded into 8 bytes, where the first 4 bytes stores the absolute time-stamp in microseconds and the last 4 bytes stores the event-polarity (1 for positive, 0 for negative) and the x and y position in the image. The latter bytes can be processed by using the the following bit-masks:

image_position_x = data & 0x000001FF

image_position_y = (data & 0x0001FE00) >> 9

polarity = (data & 0x00020000) >> 17,

where data is an integer, which contains the last 4 bytes of an event.

### DVS128 Biases

A detailed description of the biases can be found on the [iniLabs website](http://inilabs.com/support/hardware/biasing/). We use the same bias settings as used in the [jAER project](https://sourceforge.net/projects/jaer/).

|               |          |
| ------------- | -------- |
| **CAS:**      | 54       |
| **INJ_GND:**  | 1108364  |
| **REQ_PD:**   | 16777215 |
| **PU_X:**     | 8159221  |
| **DIFF_OFF:** | 132      |
| **REQ:**      | 159147   |
| **REFR:**     | 6        |
| **PU_Y:**     | 16777215 |
| **DIFF_ON:**  | 482443   |
| **DIFF:**     | 30153    |
| **FOLL:**     | 52       |
| **PR:**       | 4        |
