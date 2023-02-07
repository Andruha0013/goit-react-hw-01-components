import PropTypes from "prop-types";
import css from "./Statistics.module.css";

export const Statistics=({stats,title})=>{
    return (
        <section className={css.statistics}>
            <div className={css.card}>
                <h2 className={css.title}>{title}</h2>
                <ul className={css.stat_list}>
                    {stats.map(stat=>
                        <li className={css.item} key={stat.id}>
                            <span className={css.label}>{stat.label}</span>
                            <span className={css.percentage}>{stat.percentage}%</span>
                        </li>
                    )}
                </ul>
            </div>
        </section>
    );
}

Statistics.propTypes={
    stats:  PropTypes.array.isRequired,
    title:  PropTypes.string,
}


