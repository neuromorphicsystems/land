---
{
    "name": "N-HELEN",
    "aliases": [],
    "year": 2021,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "ESIM"
    ],
    "other_sensors": [],
    "category": "Human-centric Recordings",
    "tags": [
        "Driver Monitoring",
        "Eye Tracking",
        "Head Pose Estimation",
        "Blink Detection"
    ],
    "description": "Face Detection / Eye Blink detection",
    "dataset_properties": {
        "available_online": false,
        "has_real_data": false,
        "has_simulated_data": true,
        "has_ground_truth": false,
        "has_frames": false,
        "has_biases": false,
        "distribution_methods": [],
        "file_formats": [],
        "availability_comment": "Instructions to create the dataset are included in the Github repository",
        "dataset_links": []
    },
    "paper": {
        "title": "Real-time face & eye tracking and blink detection using event camera",
        "doi": "10.1016/j.neunet.2021.03.019",
        "authors": [
            "Cian Ryan",
            "Brian O\u2019Sullivan",
            "Amr Elrasad",
            "Aisling Cahill",
            "Joe Lemley",
            "Paul Kielty",
            "Christoph Posch",
            "Etienne Perot"
        ],
        "abstract": "Event cameras contain emerging, neuromorphic vision sensors that capture local-light intensity changes at each pixel, generating a stream of asynchronous events. This way of acquiring visual information constitutes a departure from traditional frame-based cameras and offers several significant advantages \u2014 low energy consumption, high temporal resolution, high dynamic range and low latency. Driver monitoring systems (DMS) are in-cabin safety systems designed to sense and understand a drivers physical and cognitive state. Event cameras are particularly suited to DMS due to their inherent advantages. This paper proposes a novel method to simultaneously detect and track faces and eyes for driver monitoring. A unique, fully convolutional recurrent neural network architecture is presented. To train this network, a synthetic event-based dataset is simulated with accurate bounding box annotations, called Neuromorphic-HELEN. Additionally, a method to detect and analyse drivers\u2019 eye blinks is proposed, exploiting the high temporal resolution of event cameras. Behaviour of blinking provides greater insights into a driver level of fatigue or drowsiness. We show that blinks have a unique temporal signature that can be better captured by event cameras.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 45,
            "updated": "2024-10-26 12:54:29.241045"
        },
        {
            "source": "scholar",
            "count": 104,
            "updated": "2025-07-12T09:18:09.539840"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2010.08278"
        },
        {
            "type": "paper",
            "url": "https://www.sciencedirect.com/science/article/abs/pii/S0893608021001076"
        },
        {
            "type": "github_page",
            "url": "https://github.com/Ikhadija-5/Replication-Real-time-face-eye-tracking-and-blink-detection-using-event-cameras"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "source_dataset": "HELEN",
        "simulator": "ESIM",
        "num_recordings": "2330"
    },
    "bibtex": {
        "pages": "87--97",
        "year": 2021,
        "month": "sep",
        "author": "Ryan, Cian and O\u2019Sullivan, Brian and Elrasad, Amr and Cahill, Aisling and Lemley, Joe and Kielty, Paul and Posch, Christoph and Perot, Etienne",
        "journal": "Neural Networks",
        "urldate": "2024-04-13",
        "language": "en",
        "doi": "10.1016/j.neunet.2021.03.019",
        "url": "https://linkinghub.elsevier.com/retrieve/pii/S0893608021001076",
        "issn": "08936080",
        "volume": "141",
        "title": "Real-time face \\& eye tracking and blink detection using event cameras",
        "type": "article",
        "key": "ryan_real-time_2021"
    }
}
---

### Dataset structure

The \[[N-HELEN]\] dataset was created by converting frames from the original HELEN dataset (available via [Helen Eye Dataset (kaggle.com)](https://www.kaggle.com/datasets/kmader/helen-eye-dataset))[^1] and converted using ESIM. Contrast thresholds (both positive and negative) are sampled from a normal distribution with a $\\mu = 0.2$ and a $\\sigma = 0.05$ and a refractory period if $1~ms$ is used.

The dataset contained 2330 recordings in the N-HELEN dataset. Three real recordings, captured with a Prophesee Gen4 sensor, of a single subject were then used to validate the model trained on the synthetic data. This recording was manually annotated and labelled.

Note that the paper indicates that this real data may not be publicly available for privacy reasons.

______________________________________________________________________

\[^1\]: Le, V., Brandt, J., Lin, Z., Bourdev, L., & Huang, T. S. (2012). Interactive facial feature localization. In _Computer Vision–ECCV 2012: 12th European Conference on Computer Vision, Florence, Italy, October 7-13, 2012, Proceedings, Part III 12_ (pp. 679-692). Springer Berlin Heidelberg.
